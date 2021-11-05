import type { Reward } from '../../src/types';

export const REWARDS: Reward[] = [
    {
        name: 'Spion na velitelstvi',
        description: 'Na tomto miste se budou objevovat informace o patrolach cholery',
        cost: 5,
    },
    {
        name: 'Vysilacky',
        description: 'Nalezli jste vysilacky. Od teto chvile muzete pouzivat vase mobily pro komunikaci s ostatnimi agenty',
        cost: 7,
    },
    {
        name: 'Spion v marnici',
        description: 'Na tomto miste se budou objevovat informace o padlych agentech od nasi krysy pracujici marnici',
        cost: 9,
    },
    {
        name: 'Civilni obleceni',
        description: 'Pokud mate na sobe vezenske mundury (reflexni vesty), budete si je moci sundat.',
        cost: 14,
    },
    {
        name: 'Bedna s granatama',
        description: 'Bude upresneno.',
        cost: 19,
    },
    {
        name: 'Grande Finale',
        description: 'Na kote triangl se setkejte s velicim dustojnikem odboje a provedte sabotaz na zakladne Stare Hute podle jeho instrukci',
        cost: 21,
    },
]