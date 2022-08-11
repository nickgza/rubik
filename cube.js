import { Colour as C, Face as F, Move } from './enums.js'
import { Corner, Edge } from './piece.js'
import { rotate } from './rot90.js'

export class Cube {
    constructor() {
        this.pieces = [
            [[new Corner([C.WHITE, C.GREEN, C.ORANGE], F.U, F.F) , new Edge([C.WHITE, C.GREEN], F.U, F.F) , new Corner([C.WHITE, C.RED, C.GREEN], F.U, F.R)],
             [new Edge([C.GREEN, C.ORANGE], F.F, F.L)            , null                                   , new Edge([C.GREEN, C.RED], F.F, F.R)],
             [new Corner([C.YELLOW, C.ORANGE, C.GREEN], F.D, F.L), new Edge([C.YELLOW, C.GREEN], F.D, F.F), new Corner([C.YELLOW, C.GREEN, C.RED], F.D, F.F)]],
            [[new Edge([C.WHITE, C.ORANGE], F.U, F.L)            , null                                   , new Edge([C.WHITE, C.RED], F.U, F.R)],
             [null                                               , null                                   , null],
             [new Edge([C.YELLOW, C.ORANGE], F.D, F.L)           , null                                   , new Edge([C.YELLOW, C.RED], F.D, F.R)]],
            [[new Corner([C.WHITE, C.ORANGE, C.BLUE], F.U, F.L)  , new Edge([C.WHITE, C.BLUE], F.U, F.B)  , new Corner([C.WHITE, C.BLUE, C.RED], F.U, F.B)],
             [new Edge([C.BLUE, C.ORANGE], F.B, F.L)             , null                                   , new Edge([C.BLUE, C.RED], F.B, F.R)],
             [new Corner([C.YELLOW, C.BLUE, C.ORANGE], F.D, F.B) , new Edge([C.YELLOW, C.BLUE], F.D, F.B) , new Corner([C.YELLOW, C.RED, C.BLUE], F.D, F.R)]]
        ]
    }

    make_moves(moves) {
        for (const move of moves.split(' ')) {
            this.make_move(move);
        }
    }

    make_move(move) {
        const nums = [0, 1, 2];
        for (const a of nums) {
            for (const b of nums) {
                switch (move) {
                    case Move.U:
                        this.pieces[a][0][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 0, 3);
                        break;
                    case Move.Up:
                        this.pieces[a][0][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 0, 1);
                        break;
                    case Move.U2:
                        this.pieces[a][0][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 0, 2);
                        break;
                    case Move.E:
                        this.pieces[a][1][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 1, 1);
                        break;
                    case Move.Ep:
                        this.pieces[a][1][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 1, 3);
                        break;
                    case Move.E2:
                        this.pieces[a][1][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 1, 2);
                        break;
                    case Move.D:
                        this.pieces[a][2][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 2, 1);
                        break;
                    case Move.Dp:
                        this.pieces[a][2][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 2, 3);
                        break;
                    case Move.D2:
                        this.pieces[a][2][b]?.change_orientation(move);
                        rotate(this.pieces, 'y', 2, 2);
                        break;
                    case Move.L:
                        this.pieces[a][b][0]?.change_orientation(move);
                        rotate(this.pieces, 'z', 0, 1);
                        break;
                    case Move.Lp:
                        this.pieces[a][b][0]?.change_orientation(move);
                        rotate(this.pieces, 'z', 0, 3);
                        break;
                    case Move.L2:
                        this.pieces[a][b][0]?.change_orientation(move);
                        rotate(this.pieces, 'z', 0, 2);
                        break;
                    case Move.M:
                        this.pieces[a][b][1]?.change_orientation(move);
                        rotate(this.pieces, 'z', 1, 1);
                        break;
                    case Move.Mp:
                        this.pieces[a][b][1]?.change_orientation(move);
                        rotate(this.pieces, 'z', 1, 3);
                        break;
                    case Move.M2:
                        this.pieces[a][b][1]?.change_orientation(move);
                        rotate(this.pieces, 'z', 1, 2);
                        break;
                    case Move.R:
                        this.pieces[a][b][2]?.change_orientation(move);
                        rotate(this.pieces, 'z', 2, 3);
                        break;
                    case Move.Rp:
                        this.pieces[a][b][2]?.change_orientation(move);
                        rotate(this.pieces, 'z', 2, 1);
                        break;
                    case Move.R2:
                        this.pieces[a][b][2]?.change_orientation(move);
                        rotate(this.pieces, 'z', 2, 2);
                        break;
                    case Move.F:
                        this.pieces[0][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 0, 1);
                        break;
                    case Move.Fp:
                        this.pieces[0][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 0, 3);
                        break;
                    case Move.F2:
                        this.pieces[0][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 0, 2);
                        break;
                    case Move.S:
                        this.pieces[1][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 1, 1);
                        break;
                    case Move.Sp:
                        this.pieces[1][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 1, 3);
                        break;
                    case Move.S2:
                        this.pieces[1][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 1, 2);
                        break;
                    case Move.B:
                        this.pieces[2][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 2, 3);
                        break;
                    case Move.Bp:
                        this.pieces[2][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 2, 1);
                        break;
                    case Move.B2:
                        this.pieces[2][a][b]?.change_orientation(move);
                        rotate(this.pieces, 'x', 2, 2);
                        break;
                }
            }
        }
    }

    get_edge(letter) {
        let piece;
        switch (letter) {
            case 'A':
                piece = this.pieces[2][0][1];
                return [piece, (piece.orientation === F.U ? 0 : 1)];
            case 'Q':
                piece = this.pieces[2][0][1]
                return [piece, (piece.orientation === F.B ? 0 : 1)];
            case 'B':
                piece = this.pieces[1][0][2]
                return [piece, (piece.orientation === F.U ? 0 : 1)];
            case 'M':
                piece = this.pieces[1][0][2]
                return [piece, (piece.orientation === F.R ? 0 : 1)];
            case 'C':
                piece = this.pieces[0][0][1]
                return [piece, (piece.orientation === F.U ? 0 : 1)];
            case 'I':
                piece = this.pieces[0][0][1]
                return [piece, (piece.orientation === F.F ? 0 : 1)];
            case 'D':
                piece = this.pieces[1][0][0]
                return [piece, (piece.orientation === F.U ? 0 : 1)];
            case 'E':
                piece = this.pieces[1][0][0]
                return [piece, (piece.orientation === F.L ? 0 : 1)];
            case 'L':
                piece = this.pieces[0][1][0]
                return [piece, (piece.orientation === F.F ? 0 : 1)];
            case 'F':
                piece = this.pieces[0][1][0]
                return [piece, (piece.orientation === F.L ? 0 : 1)];
            case 'J':
                piece = this.pieces[0][1][2]
                return [piece, (piece.orientation === F.F ? 0 : 1)];
            case 'P':
                piece = this.pieces[0][1][2]
                return [piece, (piece.orientation === F.R ? 0 : 1)];
            case 'T':
                piece = this.pieces[2][1][2]
                return [piece, (piece.orientation === F.B ? 0 : 1)];
            case 'N':
                piece = this.pieces[2][1][2]
                return [piece, (piece.orientation === F.R ? 0 : 1)];
            case 'R':
                piece = this.pieces[2][1][0]
                return [piece, (piece.orientation === F.B ? 0 : 1)];
            case 'H':
                piece = this.pieces[2][1][0]
                return [piece, (piece.orientation === F.L ? 0 : 1)];
            case 'U':
                piece = this.pieces[0][2][1]
                return [piece, (piece.orientation === F.D ? 0 : 1)];
            case 'K':
                piece = this.pieces[0][2][1]
                return [piece, (piece.orientation === F.F ? 0 : 1)];
            case 'V':
                piece = this.pieces[1][2][2]
                return [piece, (piece.orientation === F.D ? 0 : 1)];
            case 'O':
                piece = this.pieces[1][2][2]
                return [piece, (piece.orientation === F.R ? 0 : 1)];
            case 'W':
                piece = this.pieces[2][2][1]
                return [piece, (piece.orientation === F.D ? 0 : 1)];
            case 'S':
                piece = this.pieces[2][2][1]
                return [piece, (piece.orientation === F.B ? 0 : 1)];
            case 'X':
                piece = this.pieces[1][2][0]
                return [piece, (piece.orientation === F.D ? 0 : 1)];
            case 'G':
                piece = this.pieces[1][2][0]
                return [piece, (piece.orientation === F.L ? 0 : 1)];
        }
    }

    get_corner(letter) {
        let piece;
        switch (letter) {
            case 'A':
                piece = this.pieces[2][0][0]
                return [piece, (piece.orientation === F.U ? 0 : (piece.orientation === F.B ? 1 : 2))];
            case 'E':
                piece = this.pieces[2][0][0]
                return [piece, (piece.orientation === F.L ? 0 : (piece.orientation === F.U ? 1 : 2))];
            case 'R':
                piece = this.pieces[2][0][0]
                return [piece, (piece.orientation === F.B ? 0 : (piece.orientation === F.L ? 1 : 2))];
            case 'B':
                piece = this.pieces[2][0][2]
                return [piece, (piece.orientation === F.U ? 0 : (piece.orientation === F.R ? 1 : 2))];
            case 'Q':
                piece = this.pieces[2][0][2]
                return [piece, (piece.orientation === F.B ? 0 : (piece.orientation === F.U ? 1 : 2))];
            case 'N':
                piece = this.pieces[2][0][2]
                return [piece, (piece.orientation === F.R ? 0 : (piece.orientation === F.B ? 1 : 2))];
            case 'C':
                piece = this.pieces[0][0][2]
                return [piece, (piece.orientation === F.U ? 0 : (piece.orientation === F.F ? 1 : 2))];
            case 'M':
                piece = this.pieces[0][0][2]
                return [piece, (piece.orientation === F.R ? 0 : (piece.orientation === F.U ? 1 : 2))];
            case 'J':
                piece = this.pieces[0][0][2]
                return [piece, (piece.orientation === F.F ? 0 : (piece.orientation === F.R ? 1 : 2))];
            case 'D':
                piece = this.pieces[0][0][0]
                return [piece, (piece.orientation === F.U ? 0 : (piece.orientation === F.L ? 1 : 2))];
            case 'I':
                piece = this.pieces[0][0][0]
                return [piece, (piece.orientation === F.F ? 0 : (piece.orientation === F.U ? 1 : 2))];
            case 'F':
                piece = this.pieces[0][0][0]
                return [piece, (piece.orientation === F.L ? 0 : (piece.orientation === F.F ? 1 : 2))];
            case 'U':
                piece = this.pieces[0][2][0]
                return [piece, (piece.orientation === F.D ? 0 : (piece.orientation === F.F ? 1 : 2))];
            case 'G':
                piece = this.pieces[0][2][0]
                return [piece, (piece.orientation === F.L ? 0 : (piece.orientation === F.D ? 1 : 2))];
            case 'L':
                piece = this.pieces[0][2][0]
                return [piece, (piece.orientation === F.F ? 0 : (piece.orientation === F.L ? 1 : 2))];
            case 'V':
                piece = this.pieces[0][2][2]
                return [piece, (piece.orientation === F.D ? 0 : (piece.orientation === F.R ? 1 : 2))];
            case 'K':
                piece = this.pieces[0][2][2]
                return [piece, (piece.orientation === F.F ? 0 : (piece.orientation === F.D ? 1 : 2))];
            case 'P':
                piece = this.pieces[0][2][2]
                return [piece, (piece.orientation === F.R ? 0 : (piece.orientation === F.F ? 1 : 2))];
            case 'W':
                piece = this.pieces[2][2][2]
                return [piece, (piece.orientation === F.D ? 0 : (piece.orientation === F.B ? 1 : 2))];
            case 'O':
                piece = this.pieces[2][2][2]
                return [piece, (piece.orientation === F.R ? 0 : (piece.orientation === F.D ? 1 : 2))];
            case 'T':
                piece = this.pieces[2][2][2]
                return [piece, (piece.orientation === F.B ? 0 : (piece.orientation === F.R ? 1 : 2))];
            case 'X':
                piece = this.pieces[2][2][0]
                return [piece, (piece.orientation === F.D ? 0 : (piece.orientation === F.L ? 1 : 2))];
            case 'S':
                piece = this.pieces[2][2][0]
                return [piece, (piece.orientation === F.B ? 0 : (piece.orientation === F.D ? 1 : 2))];
            case 'H':
                piece = this.pieces[2][2][0]
                return [piece, (piece.orientation === F.L ? 0 : (piece.orientation === F.B ? 1 : 2))];
        }
    }

    get_letter( {piece, orientation, M2_parity = false} ) {
        if (piece instanceof Array) {
            return this.get_letter({piece: piece[0], orientation: piece[1], M2_parity: M2_parity});
        }

        if (piece instanceof Corner) {
            if (piece.equals(new Corner([C.WHITE, C.ORANGE, C.BLUE]))) {
                return (orientation === 0 ? 'A' : (orientation === 1 ? 'E' : 'R'));
            } else if (piece.equals(new Corner([C.WHITE, C.BLUE, C.RED]))) {
                return (orientation === 0 ? 'B' : (orientation === 1 ? 'Q' : 'N'));
            } else if (piece.equals(new Corner([C.WHITE, C.RED, C.GREEN]))) {
                return (orientation === 0 ? 'C' : (orientation === 1 ? 'M' : 'J'));
            } else if (piece.equals(new Corner([C.WHITE, C.GREEN, C.ORANGE]))) {
                return (orientation === 0 ? 'D' : (orientation === 1 ? 'I' : 'F'));
            } else if (piece.equals(new Corner([C.YELLOW, C.ORANGE, C.GREEN]))) {
                return (orientation === 0 ? 'U' : (orientation === 1 ? 'G' : 'L'));
            } else if (piece.equals(new Corner([C.YELLOW, C.GREEN, C.RED]))) {
                return (orientation === 0 ? 'V' : (orientation === 1 ? 'K' : 'P'));
            } else if (piece.equals(new Corner([C.YELLOW, C.RED, C.BLUE]))) {
                return (orientation === 0 ? 'W' : (orientation === 1 ? 'O' : 'T'));
            } else if (piece.equals(new Corner([C.YELLOW, C.BLUE, C.ORANGE]))) {
                return (orientation === 0 ? 'X' : (orientation === 1 ? 'S' : 'H'));
            }
        } else if (piece instanceof Edge) {
            if (piece.equals(new Edge([C.WHITE, C.BLUE]))) {
                return (!M2_parity ? (orientation === 0 ? 'A' : 'Q') : (orientation === 0 ? 'D' : 'E'));
            } else if (piece.equals(new Edge([C.WHITE, C.RED]))) {
                return (orientation === 0 ? 'B' : 'M');
            } else if (piece.equals(new Edge([C.WHITE, C.GREEN]))) {
                return (orientation === 0 ? 'C' : 'I');
            } else if (piece.equals(new Edge([C.WHITE, C.ORANGE]))) {
                return (!M2_parity ? (orientation === 0 ? 'D' : 'E') : (orientation === 0 ? 'A' : 'Q'));
            } else if (piece.equals(new Edge([C.GREEN, C.ORANGE]))) {
                return (orientation === 0 ? 'L' : 'F');
            } else if (piece.equals(new Edge([C.GREEN, C.RED]))) {
                return (orientation === 0 ? 'J' : 'P');
            } else if (piece.equals(new Edge([C.BLUE, C.RED]))) {
                return (orientation === 0 ? 'T' : 'N');
            } else if (piece.equals(new Edge([C.BLUE, C.ORANGE]))) {
                return (orientation === 0 ? 'R' : 'H');
            } else if (piece.equals(new Edge([C.YELLOW, C.GREEN]))) {
                return (orientation === 0 ? 'U' : 'K');
            } else if (piece.equals(new Edge([C.YELLOW, C.RED]))) {
                return (orientation === 0 ? 'V' : 'O');
            } else if (piece.equals(new Edge([C.YELLOW, C.BLUE]))) {
                return (orientation === 0 ? 'W' : 'S');
            } else if (piece.equals(new Edge([C.YELLOW, C.ORANGE]))) {
                return (orientation === 0 ? 'X' : 'G');
            }
        }
    }
}