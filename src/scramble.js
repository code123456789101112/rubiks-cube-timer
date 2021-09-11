function generateScramble(cube = "3x3x3") {
    const nums = [0, 1, 2];
    const baseMoves = ["R", "U", "F"];

    const size =
        cube === "3x3x3"
            ? 20
            : cube === "4x4x4"
            ? 45
            : cube === "5x5x5"
            ? 60
            : cube === "6x6x6"
            ? 80
            : cube === "7x7x7"
            ? 100
            : 11;

    const cubeSize = parseInt(cube.slice(0, 1));

    if (cubeSize >= 3) {
        nums.push(3, 4, 5);
        baseMoves.push("L", "B", "D");
    }

    if (cubeSize >= 4) {
        nums.push(6, 7, 8);
        baseMoves.push("Rw", "Uw", "Fw");
    }

    if (cubeSize >= 5) {
        nums.push(9, 10, 11);
        baseMoves.push("Lw", "Bw", "Dw");
    }

    if (cubeSize >= 6) {
        nums.push(12, 13, 14);
        baseMoves.push("3Rw", "3Uw", "3Fw");
    }

    if (cubeSize >= 7) {
        nums.push(15, 16, 17);
        baseMoves.push("3Lw", "3Bw", "3Dw");
    }

    let bad = true;
    let scramble = [];

    while (bad) {
        scramble = [];
        for (let i = 0; i < size; i++) scramble.push(nums[Math.floor(Math.random() * nums.length)]);

        for (let i = 0; i < size - 1; i++) {
            if (scramble[i] === scramble[i + 1]) {
                bad = true;
                break;
            } else bad = false;
        }
    }

    return scramble
        .map(index => {
            const moves = [baseMoves[index], `${baseMoves[index]}'`, `${baseMoves[index]}2`];
            return moves[Math.floor(Math.random() * moves.length)];
        })
        .join(" ");
}

module.exports = generateScramble;
