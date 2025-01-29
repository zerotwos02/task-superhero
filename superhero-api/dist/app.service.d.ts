import { Superhero } from './superhero.model';
export declare class AppService {
    private superheroes;
    addSuperhero(superheroData: {
        name: string;
        superpower: string;
        humilityScore: number;
    }): Superhero;
    getSuperheroes(): Superhero[];
}
