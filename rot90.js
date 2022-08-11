function transpose(m, x, y, z) {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < i; j++) {
            [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
        }
    }
}

function rot90(m, k=1, x=0, y=0, z=0) {
    let mod = k % 4;
    if (k < 0) mod += 4;
    if (mod == 1) {
        m.reverse();
        transpose(m);
    } else if (mod == 2) {
        m.reverse();
        transpose(m);
        m.reverse();
        transpose(m);
    } else if (mod == 3) {
        transpose(m);
        m.reverse();
    }
}

export function rotate(m, axis, layer, times=1) {
    if (times === 0) return;

    times %= 4;
    if (times < 0) times = 4 - times;

    switch (axis) {
        case 'x': case 'X':
            [m[layer][0][0], m[layer][0][2], m[layer][2][2], m[layer][2][0]] = [m[layer][2][0], m[layer][0][0], m[layer][0][2], m[layer][2][2]];
            [m[layer][0][1], m[layer][1][2], m[layer][2][1], m[layer][1][0]] = [m[layer][1][0], m[layer][0][1], m[layer][1][2], m[layer][2][1]];
            break;
        case 'y': case 'Y':
            [m[0][layer][0], m[0][layer][2], m[2][layer][2], m[2][layer][0]] = [m[2][layer][0], m[0][layer][0], m[0][layer][2], m[2][layer][2]];
            [m[0][layer][1], m[1][layer][2], m[2][layer][1], m[1][layer][0]] = [m[1][layer][0], m[0][layer][1], m[1][layer][2], m[2][layer][1]];
            break;
        case 'z': case 'Z':
            [m[0][0][layer], m[0][2][layer], m[2][2][layer], m[2][0][layer]] = [m[2][0][layer], m[0][0][layer], m[0][2][layer], m[2][2][layer]];
            [m[0][1][layer], m[1][2][layer], m[2][1][layer], m[1][0][layer]] = [m[1][0][layer], m[0][1][layer], m[1][2][layer], m[2][1][layer]];
            break;
    }

    rotate(m, axis, layer, times-1);
}

// let m = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[10, 11, 12], [13, 14, 15], [16, 17, 18]], [[19, 20, 21], [22, 23, 24], [25, 26, 27]]]

// f(m, 'z', 0);
// console.table(m);