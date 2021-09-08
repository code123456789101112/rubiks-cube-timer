function cube(scramble) {
    const baseURL = `http://cube.rider.biz/visualcube.php?fmt=svg&size=80&pzl=3&sch=wrgyob&alg=${encodeURIComponent(
        scramble
    )}`;

    const imgArray = [];

    for (let i = 0; i < 6; i++) {
        imgArray.push(
            `${baseURL}&r=${
                i === 0
                    ? "x-90"
                    : i === 1
                    ? "y-90"
                    : i === 2
                    ? "x0"
                    : i === 3
                    ? "y90"
                    : i === 4
                    ? "y180"
                    : i === 5
                    ? "x90"
                    : "x90"
            }`
        );
    }

    return imgArray;
}

module.exports = cube;
