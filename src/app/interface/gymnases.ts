import { ArrayType } from "@angular/compiler";
import * as internal from "stream";
import { Seance } from "./seance";

export interface GymnasesAngular {
    id: string;
    idGymnase: number;
    nomGymnase: string;
	adresse: string;
    ville: string;
    surface: number;
    seances: Seance[];
}