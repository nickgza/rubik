import { Colour, Face, Move } from './enums.js'

class Piece {
    constructor(colours, orientation, orientation2) {
        this.colours = colours;
        this.orientation = orientation;
        this.orientation2 = orientation2;
    }

    equals(other) {
        return JSON.stringify(this.colours) === JSON.stringify(other.colours);
    }

    change_orientation(move) {
        for (let orientation of ['orientation', 'orientation2']) {
            switch (move) {
                case Move.U: case Move.Dp: case Move.Ep: case "U": case "D'": case "E'":
                    if (this[orientation] === Face.F) this[orientation] = Face.L;
                    else if (this[orientation] === Face.L) this[orientation] = Face.B;
                    else if (this[orientation] === Face.B) this[orientation] = Face.R;
                    else if (this[orientation] === Face.R) this[orientation] = Face.F;
                    break;
                case Move.Up: case Move.D: case Move.E: case "U'": case "D": case "E":
                    if (this[orientation] === Face.F) this[orientation] = Face.R;
                    else if (this[orientation] === Face.L) this[orientation] = Face.F;
                    else if (this[orientation] === Face.B) this[orientation] = Face.L;
                    else if (this[orientation] === Face.R) this[orientation] = Face.B;
                    break;
                case Move.U2: case Move.D2: case Move.E2: case "U2": case "D2": case "E2":
                    if (this[orientation] === Face.F) this[orientation] = Face.B;
                    else if (this[orientation] === Face.L) this[orientation] = Face.R;
                    else if (this[orientation] === Face.B) this[orientation] = Face.F;
                    else if (this[orientation] === Face.R) this[orientation] = Face.L;
                    break;
                case Move.L: case Move.Rp: case Move.M: case "L": case "R'": case "M":
                    if (this[orientation] === Face.U) this[orientation] = Face.F;
                    else if (this[orientation] === Face.F) this[orientation] = Face.D;
                    else if (this[orientation] === Face.D) this[orientation] = Face.B;
                    else if (this[orientation] === Face.B) this[orientation] = Face.U;
                    break;
                case Move.Lp: case Move.R: case Move.Mp: case "L'": case "R": case "M'":
                    if (this[orientation] === Face.U) this[orientation] = Face.B;
                    else if (this[orientation] === Face.F) this[orientation] = Face.U;
                    else if (this[orientation] === Face.D) this[orientation] = Face.F;
                    else if (this[orientation] === Face.B) this[orientation] = Face.D;
                    break;
                case Move.L2: case Move.R2: case Move.M2: case "L2": case "R2": case "M2":
                    if (this[orientation] === Face.U) this[orientation] = Face.D;
                    else if (this[orientation] === Face.F) this[orientation] = Face.B;
                    else if (this[orientation] === Face.D) this[orientation] = Face.U;
                    else if (this[orientation] === Face.B) this[orientation] = Face.F;
                    break;
                case Move.F: case Move.Bp: case Move.S: case "F": case "B'": case "S":
                    if (this[orientation] === Face.U) this[orientation] = Face.R;
                    else if (this[orientation] === Face.R) this[orientation] = Face.D;
                    else if (this[orientation] === Face.D) this[orientation] = Face.L;
                    else if (this[orientation] === Face.L) this[orientation] = Face.U;
                    break;
                case Move.Fp: case Move.B: case Move.Sp: case "F'": case "B": case "S'":
                    if (this[orientation] === Face.U) this[orientation] = Face.L;
                    else if (this[orientation] === Face.R) this[orientation] = Face.U;
                    else if (this[orientation] === Face.D) this[orientation] = Face.R;
                    else if (this[orientation] === Face.L) this[orientation] = Face.D;
                    break;
                case Move.F2: case Move.B2: case Move.S2: case "F2": case "B2": case "S2":
                    if (this[orientation] === Face.U) this[orientation] = Face.D;
                    else if (this[orientation] === Face.R) this[orientation] = Face.L;
                    else if (this[orientation] === Face.D) this[orientation] = Face.U;
                    else if (this[orientation] === Face.L) this[orientation] = Face.R;
                    break;
            }
        }
    }
}

export class Corner extends Piece {
    constructor(colours, orientation=null, orientation2=null) {
        console.assert(colours.length === 3);
        super(colours, orientation, orientation2);
    }
}

export class Edge extends Piece {
    constructor(colours, orientation=null, orientation2=null) {
        console.assert(colours.length === 2);
        super(colours, orientation, orientation2);
    }
}
