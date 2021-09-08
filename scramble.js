function generateScramble() {
    const nums = [0, 1, 2, 3, 4, 5];
    const baseMoves = ["L", "R", "U", "B", "D", "F"];

    let bad = true;
    let scramble = [];

    while (bad) {
        scramble = [];
        for (let i = 0; i < 20; i++) scramble.push(nums[Math.floor(Math.random() * nums.length)]);

        for (let i = 0; i < 19; i++) {
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
