import { AppService } from './app.service';
import { Superhero } from './superhero.model';
declare class CreateSuperheroDto {
    name: string;
    superpower: string;
    humilityScore: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    addSuperhero(createSuperheroDto: CreateSuperheroDto): {
        message: string;
    };
    getSuperheroes(): Superhero[];
}
export {};
