function generateScramble(cube = "3x3x3") {
    const nums = [0, 1, 2];
    const baseMoves = ["R", "U", "F"];

    const size = cube === "3x3x3" ? 20 : 11;

    if (cube === "3x3x3") {
        nums.push(3, 4, 5);
        baseMoves.push("L", "B", "D");
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
