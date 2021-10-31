export interface Point {
    name: string;
    description: string;
    resolved: boolean;
    code: string;
    geo?: string;
}

export interface Reward {
    name: string;
    description: string;
    cost: number;
}
