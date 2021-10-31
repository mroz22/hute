import type { Reward } from '../../src/types';

export const REWARDS: Reward[] = [
    {
        name: 'Vysilacky',
        description: 'Nalezli jste vysilacky. Od teto chvile muzete pouzivat vase mobily pro komunikaci s ostatnimi agenty',
        cost: 1,
    },
    {
        name: 'Civilni obleceni',
        description: 'Pokud mate na sobe vezenske mundury (reflexni vesty), budete si je moci sundat.',
        cost: 2,
    },
    {
        name: 'Spion v marnici',
        description: 'Na tomto miste se budou objevovat informace o padlych agentech od nasi krysy pracujici marnici',
        cost: 3,
    },
    {
        name: 'Spion na velitelstvi',
        description: 'Na tomto miste se budou objevovat informace o patrolach cholery',
        cost: 3,
    },
    {
        name: 'Bedna s granatama',
        description: 'Na tomto miste se nachazi bedna s hadrovyma koulema (granaty). Zasah hadrovou kouli vyradi protivnika ze hry.',
        cost: 4,
    },
    {
        name: 'Grande Finale',
        description: 'Na kote triangl se setkejte s velicim dustojnikem odboje a provedte sabotaz na zakladne Stare Hute podle jeho instrukci',
        cost: 21,
    },
]