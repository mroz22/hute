const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = require('./keys.json');

const { POINTS } = require('./config/points');
const { REWARDS } = require('./config/rewards');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

async function deleteCollection(db, collectionPath, batchSize) {
    const collectionRef = db.collection(collectionPath);
    const query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(db, query, resolve).catch(reject);
    });
}

async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
        // When there are no documents left, we are done
        resolve();
        return;
    }

    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
        deleteQueryBatch(db, query, resolve);
    });
}

const add = (db, collection, src) => {
    // Add a new document with a generated id.
    src.forEach(async (r) => {
        const res = await db.collection(collection).add(r);
        console.log('Added document with ID: ', res.id);
    })

}


const run = async () => {
    await deleteCollection(db, 'points', 100);
    await deleteCollection(db, 'rewards', 100);

    add(db, 'points', POINTS);
    add(db, 'rewards', REWARDS);

    // deleteCollection(db, 'rewards', 100);

}

run();

module.exports = {}