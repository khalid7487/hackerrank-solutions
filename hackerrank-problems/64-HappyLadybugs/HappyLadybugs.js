process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    return freq;
};


function main() {
    var Q = parseInt(readLine());
    for (var a0 = 0; a0 < Q; a0++) {
        var n = parseInt(readLine());
        var b = readLine();
        var re = /_/;
        if (b.search(re) != -1) {
           
            var f = getFrequency(b);
            var sum = 0;
            for (key in f) {
                if (key != "_" && f[key] === 1) {
                    sum++;
                }
            }
            if (sum > 0) {
                console.log("NO");
            } else {
                console.log("YES");
            }
        } else {
            var re2 = /[A-Z]/;
            if (b.search(re2) != -1) {
                var arr = b.split('');
                var sum2 = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
                        sum2++;
                    }
                }
                if (sum2 > 0) {
                    console.log("NO");
                } else {
                    console.log("YES");
                }
            } else {
                console.log("NO");
            }
        }
    }

}
