function pileOfSharp(a) {
    for (var b = 0; b < a; b++) {
        var sharps = " ";
        for (var c = a - 1; b >= 0; c--) {
            if (b >= c) {
                sharps += "#";
            }
            else {
                sharps += " ";
            }
        }
        console.log(sharps);
    }
}
pileOfSharp(4);
