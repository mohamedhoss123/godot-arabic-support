function arabic(text) {
    let textArr = text.split(" ")
    let textResult = []
    for (let i = 0; i < textArr.length; i++) {
        let element = textArr[i]
        let reversedString = element
        console.log(reversedString)
        let myresult = []
        if (reversedString.length == 1) {
            textResult.push(data[element][0])
        } else {
            let state = 0
            for (let i = 0; i < reversedString.length; i++) {
                let ele = reversedString[i]
                if (condetion[element[i] + element[i + 1]] != undefined) {
                    myresult.push(condetion[element[i] + element[i + 1]])
                    i++
                    state = 0
                }
                else if (data[ele].length == 2) {
                    if (state == 0) {
                        myresult.push(data[ele][0])
                    } else {
                        myresult.push(data[ele][1])
                    }
                    state = 0
                }
                else if (data[ele].length == 4) {
                    if (i == reversedString.split("").length - 1 && state != 0) {
                        myresult.push(data[ele][3])
                    }
                    else if (i == reversedString.split("").length - 1 && state == 0) {
                        myresult.push(data[ele][0])
                    }
                    else if (state > 0) {
                        myresult.push(data[ele][2])
                    }
                    else if (state == 0) {
                        myresult.push(data[ele][1])
                    }
                    state++
                }
            }
        }
        textResult.push(myresult.reverse().join(""))
    };
    let exportsw = textResult.reverse().join(" ")
    return exportsw
}




document.getElementById("subbmite").addEventListener("click", function () {
    let data = document.getElementById("txtarea").value
    console.log(data)
    document.getElementById("txtare2a").value = arabic(data)
})
document.getElementById("copy").addEventListener("click", function () {
    var copyText = document.getElementById("txtare2a")
    document.getElementById("txtare2a").value
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
})
























let data = {
    "\u0627": ["\u0627", "\uFE8E"],
    "\u0628": ["\u0628", "\uFE91", "\uFE92", "\uFE90"],
    "\u062B": ["\u062B", "\uFE9B", "\uFE9C", "\uFE9A"],
    "\u064A": ["\uFEF1", "\uFEF3", "\uFEF4", "\uFEF2"],
    "\u062C": ["\u062C", "\uFE9F", "\uFEA0", "\uFE9E"],
    "\u0633": ["\uFEB1", "\uFEB3", "\uFEB4", "\uFEB2"],
    "\u0644": ["\uFEDD", "\uFEDF", "\uFEE0", "\uFEDE"],
    "\u0645": ["\u0645", "\uFEE3", "\uFEE4", "\uFEE2"],
    "\u062A": ["\u062A", "\uFE97", "\uFE98", "\uFE96"],
    "\u0639": ["\u0639", "\uFECB", "\uFECC", "\uFECA"],
    "\u0643": ["\u0643", "\uFEDB", "\uFEDC", "\uFEDA"],
    "\u0642": ["\u0642", "\uFED7", "\uFED8", "\uFED6"],
    "\u0646": ["\u0646", "\uFEE7", "\uFEE8", "\uFEE6"],
    "\u062D": ["\u062D", "\uFEA3", "\uFEA4", "\uFEA2"],
    "\u062E": ["\u062E", "\uFEA7", "\uFEA8", "\uFEA6"],
    "\u062F": ["\u062F", "\uFEAA"],
    "\u0632": ["\u0632", "\uFEB0"],
    "\u0630": ["\u0630", "\uFEAC"],
    "\u0631": ["\u0631", "\uFEAE"],
    "\u0634": ["\u0634", "\uFEB7", "\uFEB8", "\uFEB6"],
    "\u0635": ["\u0635", "\uFEBB", "\uFEBC", "\uFEBA"],
    "\u0636": ["\u0636", "\uFEBF", "\uFEC0", "\uFEBE"],
    "\u0637": ["\u0637", "\uFEC3", "\uFEC4", "\uFEC2"],
    "\u0638": ["\u0638", "\uFEC7", "\uFEC8", "\uFEC6"],
    "\u0648": ["\u0648", "\uFEEE"],
    "\u0629": ["\u0629", "\uFE94"],
    "\u0647": ["\u0647", "\uFEEB", "\uFEEC", "\uFEEA"],
}

let condetion = {
    "لا": "\uFEFC"
}