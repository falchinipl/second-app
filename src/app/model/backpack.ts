import { Prize } from "./prize";
import { Country } from "./country";
import { UserSelection } from "./UserSelection";
export class Backpack{
    prizeType?: string; 
    label?: string;
    errorMessage?: string;
    prizes?: Prize[];
    locations?: Country[];
    userSelection?: UserSelection;
}
    
