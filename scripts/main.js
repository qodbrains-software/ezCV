// ====================================================================
// LOGIC:
// ====================================================================

//SAVE CV AS PDF:
function _0x58e7(_0x2ab5f3, _0x438439) { const _0x3cae78 = _0x3cae(); return _0x58e7 = function(_0x58e7d4, _0xec29cb) { _0x58e7d4 = _0x58e7d4 - 0xa2; let _0x183224 = _0x3cae78[_0x58e7d4]; return _0x183224; }, _0x58e7(_0x2ab5f3, _0x438439); }(function(_0x229297, _0xdaa677) {
    const _0x153c1e = _0x58e7,
        _0x5bf461 = _0x229297();
    while (!![]) {
        try {
            const _0x30d96d = -parseInt(_0x153c1e(0xad)) / 0x1 * (parseInt(_0x153c1e(0xb2)) / 0x2) + -parseInt(_0x153c1e(0xaa)) / 0x3 * (parseInt(_0x153c1e(0xa4)) / 0x4) + -parseInt(_0x153c1e(0xa6)) / 0x5 + parseInt(_0x153c1e(0xae)) / 0x6 + -parseInt(_0x153c1e(0xa9)) / 0x7 + parseInt(_0x153c1e(0xb0)) / 0x8 + -parseInt(_0x153c1e(0xab)) / 0x9 * (-parseInt(_0x153c1e(0xb1)) / 0xa);
            if (_0x30d96d === _0xdaa677) break;
            else _0x5bf461['push'](_0x5bf461['shift']());
        } catch (_0x21d3f1) { _0x5bf461['push'](_0x5bf461['shift']()); }
    }
}(_0x3cae, 0xd220c));
const saveCV = () => {
    const _0x481a5c = _0x58e7,
        _0x531214 = document[_0x481a5c(0xa5)](_0x481a5c(0xaf))[_0x481a5c(0xac)]['trim']('_');
    html2pdf(document[_0x481a5c(0xa5)](_0x481a5c(0xa8)), { 'margin': 0x0, 'filename': _0x531214 + _0x481a5c(0xa3), 'image': { 'type': 'jpeg', 'quality': 0.95 }, 'html2canvas': { 'dpi': 0xfa, 'letterRendering': !![] }, 'jsPDF': { 'unit': 'cm', 'format': _0x481a5c(0xa2), 'orientation': _0x481a5c(0xa7) } });
};

function _0x3cae() {
    const _0x2dda50 = ['_CV', '276176VToYFK', 'querySelector', '5343500ERmhsA', 'portrait', '.main', '497714DetMPL', '57pzcakH', '234apGwiA', 'textContent', '6EdVoUL', '3141216LBjAGt', '#full-names', '9081120cEiqkK', '1199840exBFuC', '488646uWTTkO', 'tabloid'];
    _0x3cae = function() { return _0x2dda50; };
    return _0x3cae();
}

const detectPageHeight = () => {
    return pageHeight = document.querySelector('body').getBoundingClientRect().height;
}

const addElement = () => {
    if (detectPageHeight() < 1725) {
        var node = document.createElement("li"); // Create a <li> node
        var textnode = document.createTextNode("Water Experience...."); // Create a text node
        node.appendChild(textnode); // Append the text to <li>
        document.querySelector("ul").appendChild(node);
    } else {
        alert("You've exceeded the recommended page size");
    }
}


// H2RG CONVERSION:
function _0x51e5(_0x595324, _0x4ed275) { const _0x4d6f38 = _0x4d6f(); return _0x51e5 = function(_0x51e5f3, _0xef85ac) { _0x51e5f3 = _0x51e5f3 - 0xe5; let _0x17386c = _0x4d6f38[_0x51e5f3]; return _0x17386c; }, _0x51e5(_0x595324, _0x4ed275); }

function _0x4d6f() {
    const _0x451d1c = ['572230DfbkCO', 'join', '10gByuLy', 'Bad\x20Hex', '1670656ZMxcEN', ',0.1)', '962145SQPyPI', '1813441OvpaJt', '27sgBMiL', '1349442UeHSgk', '68834MuMvSq', 'test', 'split', 'length', '42RiwKnr', '31544hfixyZ'];
    _0x4d6f = function() { return _0x451d1c; };
    return _0x4d6f();
}(function(_0x21e64f, _0x4d7f3d) {
    const _0x3cd45d = _0x51e5,
        _0x5637a5 = _0x21e64f();
    while (!![]) {
        try {
            const _0xceeba3 = parseInt(_0x3cd45d(0xf3)) / 0x1 * (-parseInt(_0x3cd45d(0xeb)) / 0x2) + -parseInt(_0x3cd45d(0xe7)) / 0x3 * (parseInt(_0x3cd45d(0xe8)) / 0x4) + -parseInt(_0x3cd45d(0xef)) / 0x5 + parseInt(_0x3cd45d(0xf2)) / 0x6 + parseInt(_0x3cd45d(0xf0)) / 0x7 + parseInt(_0x3cd45d(0xed)) / 0x8 + -parseInt(_0x3cd45d(0xf1)) / 0x9 * (-parseInt(_0x3cd45d(0xe9)) / 0xa);
            if (_0xceeba3 === _0x4d7f3d) break;
            else _0x5637a5['push'](_0x5637a5['shift']());
        } catch (_0x3d3b93) { _0x5637a5['push'](_0x5637a5['shift']()); }
    }
}(_0x4d6f, 0x3517c));
const hexToRgbA = _0x4467dd => { const _0x4f1e2e = _0x51e5; var _0x4c4c9b; if (/^#([A-Fa-f0-9]{3}){1,2}$/ [_0x4f1e2e(0xf4)](_0x4467dd)) return _0x4c4c9b = _0x4467dd['substring'](0x1)[_0x4f1e2e(0xe5)](''), _0x4c4c9b[_0x4f1e2e(0xe6)] == 0x3 && (_0x4c4c9b = [_0x4c4c9b[0x0], _0x4c4c9b[0x0], _0x4c4c9b[0x1], _0x4c4c9b[0x1], _0x4c4c9b[0x2], _0x4c4c9b[0x2]]), _0x4c4c9b = '0x' + _0x4c4c9b[_0x4f1e2e(0xea)](''), 'rgba(' + [_0x4c4c9b >> 0x10 & 0xff, _0x4c4c9b >> 0x8 & 0xff, _0x4c4c9b & 0xff][_0x4f1e2e(0xea)](',') + _0x4f1e2e(0xee); throw new Error(_0x4f1e2e(0xec)); };
//THEMER MAGIC:
(function(_0x499476, _0x233e44) {
    const _0x3571d8 = _0x3fb7,
        _0x4a828c = _0x499476();
    while (!![]) {
        try {
            const _0x3975c3 = -parseInt(_0x3571d8(0xb0)) / 0x1 * (parseInt(_0x3571d8(0xaa)) / 0x2) + parseInt(_0x3571d8(0xa9)) / 0x3 + parseInt(_0x3571d8(0xa3)) / 0x4 + parseInt(_0x3571d8(0xa5)) / 0x5 * (parseInt(_0x3571d8(0xb1)) / 0x6) + parseInt(_0x3571d8(0x9e)) / 0x7 * (-parseInt(_0x3571d8(0xa6)) / 0x8) + parseInt(_0x3571d8(0xa2)) / 0x9 * (parseInt(_0x3571d8(0xad)) / 0xa) + parseInt(_0x3571d8(0xb4)) / 0xb;
            if (_0x3975c3 === _0x233e44) break;
            else _0x4a828c['push'](_0x4a828c['shift']());
        } catch (_0x359af1) { _0x4a828c['push'](_0x4a828c['shift']()); }
    }
}(_0x88f1, 0x206f4));

function _0x3fb7(_0x59f66, _0x407b9a) { const _0x88f177 = _0x88f1(); return _0x3fb7 = function(_0x3fb797, _0x4de9d3) { _0x3fb797 = _0x3fb797 - 0x9d; let _0x1a1aa6 = _0x88f177[_0x3fb797]; return _0x1a1aa6; }, _0x3fb7(_0x59f66, _0x407b9a); }
const changeTheme = _0x1f36c5 => {
    const _0x3559f4 = _0x3fb7;
    let _0x4be6df = document[_0x3559f4(0xa0)](_0x3559f4(0xa1)),
        _0x494b2c = document[_0x3559f4(0xa0)]('h1'),
        _0x310f0b = document['querySelectorAll']('h3'),
        _0x100ef4 = document['querySelectorAll'](_0x3559f4(0xa7)),
        _0x1d67d7 = document[_0x3559f4(0xab)]('li');
    _0x100ef4[_0x3559f4(0xb3)](_0x3604d0 => {
        const _0x1ece9d = _0x3559f4;
        _0x3604d0[_0x1ece9d(0xae)][_0x1ece9d(0xb2)] = _0x1f36c5[_0x1ece9d(0x9d)][_0x1ece9d(0xaf)], _0x3604d0['style'][_0x1ece9d(0x9f)]('--default-icons', _0x1f36c5['target'][_0x1ece9d(0xaf)]);
    }), _0x494b2c['style'][_0x3559f4(0xb2)] = _0x1f36c5['target'][_0x3559f4(0xaf)], _0x4be6df['style'][_0x3559f4(0xac)] = _0x1f36c5[_0x3559f4(0x9d)][_0x3559f4(0xaf)], _0x1d67d7[_0x3559f4(0xb3)](_0x1a8dff => {
        const _0x580085 = _0x3559f4;
        _0x1a8dff[_0x580085(0xae)][_0x580085(0x9f)]('--li-background-color', hexToRgbA(_0x1f36c5['target'][_0x580085(0xaf)])), _0x1a8dff[_0x580085(0xae)]['setProperty'](_0x580085(0xa4), _0x1f36c5['target'][_0x580085(0xaf)]);
    }), _0x310f0b[_0x3559f4(0xb3)](_0x505df2 => {
        const _0x42d0ef = _0x3559f4;
        _0x505df2[_0x42d0ef(0xae)]['setProperty'](_0x42d0ef(0xa8), hexToRgbA(_0x1f36c5[_0x42d0ef(0x9d)][_0x42d0ef(0xaf)]));
    });
};

function _0x88f1() {
    const _0xa4ea77 = ['--li-border-color', '294565qNvwkv', '150952iUkWhm', '.material-icons', '--default', '618660MyxhPo', '2EMVBHS', 'querySelectorAll', 'backgroundColor', '1326820Duhitx', 'style', 'value', '193693IoAyhk', '6HjutDV', 'color', 'forEach', '679283ZtdLTN', 'target', '98KfnMzr', 'setProperty', 'querySelector', 'body', '9rNrnSw', '524572hJdwBC'];
    _0x88f1 = function() { return _0xa4ea77; };
    return _0x88f1();
}
// MAKE EDITABLE LINKS DYNAMIC:
(function(_0x412153, _0x23249e) {
    const _0x9dc16f = _0x5c0f,
        _0x1b47fc = _0x412153();
    while (!![]) {
        try {
            const _0x12bd7e = -parseInt(_0x9dc16f(0x14c)) / 0x1 + parseInt(_0x9dc16f(0x152)) / 0x2 + -parseInt(_0x9dc16f(0x158)) / 0x3 + -parseInt(_0x9dc16f(0x147)) / 0x4 + parseInt(_0x9dc16f(0x14f)) / 0x5 + -parseInt(_0x9dc16f(0x151)) / 0x6 * (-parseInt(_0x9dc16f(0x156)) / 0x7) + -parseInt(_0x9dc16f(0x155)) / 0x8 * (-parseInt(_0x9dc16f(0x148)) / 0x9);
            if (_0x12bd7e === _0x23249e) break;
            else _0x1b47fc['push'](_0x1b47fc['shift']());
        } catch (_0x55ba34) { _0x1b47fc['push'](_0x1b47fc['shift']()); }
    }
}(_0xf2e1, 0x5275f));

function _0x5c0f(_0x5e106a, _0x364d1f) { const _0xf2e1e9 = _0xf2e1(); return _0x5c0f = function(_0x5c0fe8, _0x28ce32) { _0x5c0fe8 = _0x5c0fe8 - 0x146; let _0x366c8f = _0xf2e1e9[_0x5c0fe8]; return _0x366c8f; }, _0x5c0f(_0x5e106a, _0x364d1f); }

function _0xf2e1() {
    const _0x1afbca = ['6goWnnX', '482250bPUSrB', 'http://', 'forEach', '360WBZqvT', '1921003EfcvsK', 'mailto:', '1884558hvJuJT', 'input', 'addEventListener', '953412NZXoyw', '101358dOXuko', 'href', 'from', 'classList', '332556ronhAF', 'email-link', 'textContent', '2572550KzTnHL', 'includes'];
    _0xf2e1 = function() { return _0x1afbca; };
    return _0xf2e1();
}
const makeLinksDynamic = _0x5ec118 => {
    const _0x56ada9 = _0x5c0f;
    _0x5ec118[_0x56ada9(0x154)](_0x35ecd2 => {
        const _0x55f87a = _0x56ada9;
        _0x35ecd2[_0x55f87a(0x146)](_0x55f87a(0x159), function() {
            const _0x53689d = _0x55f87a;
            Array[_0x53689d(0x14a)](_0x35ecd2[_0x53689d(0x14b)])[_0x53689d(0x150)](_0x53689d(0x14d)) ? _0x35ecd2['href'] = _0x53689d(0x157) + _0x35ecd2[_0x53689d(0x14e)] : _0x35ecd2[_0x53689d(0x149)] = _0x53689d(0x153) + _0x35ecd2['textContent'];
        });
    });
};

//DISABLE/ENABLE SECTIONS LOGIC:
// function _0xb375() {
//     const _0x4e6002 = ['3482984YcmyCl', '3NbgMJt', '1842684shiUHm', 'click', '2261418wrCCBt', 'addEventListener', 'target', '2490640WhGSQQ', '185166iRXkOS', 'forEach', 'style', '4598062CywVfi', 'display', '875054HCLPgd'];
//     _0xb375 = function() { return _0x4e6002; };
//     return _0xb375();
// }(function(_0x2d4199, _0x2fcde0) {
//     const _0x5c2069 = _0x41d3,
//         _0xd9477b = _0x2d4199();
//     while (!![]) {
//         try {
//             const _0x25d66d = -parseInt(_0x5c2069(0x105)) / 0x1 + parseInt(_0x5c2069(0xfc)) / 0x2 * (parseInt(_0x5c2069(0xfe)) / 0x3) + -parseInt(_0x5c2069(0xff)) / 0x4 + parseInt(_0x5c2069(0x104)) / 0x5 + parseInt(_0x5c2069(0x101)) / 0x6 + -parseInt(_0x5c2069(0xfa)) / 0x7 + parseInt(_0x5c2069(0xfd)) / 0x8;
//             if (_0x25d66d === _0x2fcde0) break;
//             else _0xd9477b['push'](_0xd9477b['shift']());
//         } catch (_0x40416e) { _0xd9477b['push'](_0xd9477b['shift']()); }
//     }
// }(_0xb375, 0x6cb2c));
// const disableSection = _0x92bfb => {
//         const _0x5bc1e2 = _0x41d3;
//         _0x92bfb['parentElement'][_0x5bc1e2(0xf9)][_0x5bc1e2(0xfb)] = 'none';
//     },
//     listOfSections = document['querySelectorAll']('.can-disable'),
//     attach = _0x450b68 => {
//         const _0x93bc14 = _0x41d3;
//         _0x450b68[_0x93bc14(0xf8)](_0x4faf2e => {
//             const _0x2209f9 = _0x93bc14;
//             _0x4faf2e[_0x2209f9(0x102)](_0x2209f9(0x100), _0x83968a => {
//                 const _0x412807 = _0x2209f9;
//                 disableSection(_0x83968a[_0x412807(0x103)]);
//             });
//         });
//     };

// function _0x41d3(_0x5a60be, _0x4663ae) { const _0xb37557 = _0xb375(); return _0x41d3 = function(_0x41d369, _0x3e82c5) { _0x41d369 = _0x41d369 - 0xf8; let _0x24b7bc = _0xb37557[_0x41d369]; return _0x24b7bc; }, _0x41d3(_0x5a60be, _0x4663ae); }
// attach(listOfSections);

// ====================================================================
//MAKE LIST ITEMS SORTABLE:
// ====================================================================
let sortable = new Sortable.default(document.querySelectorAll('ul'), {
    draggable: null,
    mirror: {
        constrainDimensions: true
    }
});



const sortBehaviorElements = (selector) => {
    return disableSortElements = document.querySelectorAll(selector);
}

const attachMouseEvents = (nodeList, event1, event2) => {
    nodeList.forEach(node => {
        node.addEventListener(event1, () => {
            sortable.options.draggable = null;
        })
        node.addEventListener(event2, () => {
            sortable.options.draggable = 'li';
        })
    })
}

// ====================================================================
//INSERTION AND DELETION
// ====================================================================
const themeOptions = document.querySelectorAll('.color-item');

const themeOptionActivator = (nodeList) => {
    nodeList.forEach(node => {
        node.addEventListener('click', (e) => {
            changeTheme({
                target: {
                    value: `${e.target.classList[0]}`
                }
            });
        })
    })
}

themeOptionActivator(themeOptions);

//Disabling & Enabling:
attachMouseEvents(sortBehaviorElements(".action-btn"), 'mouseenter', 'mouseleave')
attachMouseEvents(sortBehaviorElements("p[contenteditable=true], h5[contenteditable=true]"), 'mousedown', 'mouseleave')

//Enabling:
attachMouseEvents(sortBehaviorElements(".sort"), 'mouseup', 'mouseenter')


sortable.on('drag:stop', () => {
    sortable.options.draggable = null;
})

sortable.on('drag:start', () => {
    sortable.options.draggable = 'li';
})


// ====================================================================
//TAG/ELEMENT ELEMENT SELECTION:
// ====================================================================
const themer = document.querySelector(".themer"); //input:color
const saveButton = document.querySelector(".save-button");
const links = document.querySelectorAll(".link");


// ====================================================================
//PUTTING THINGS TO WORK:
// ====================================================================
makeLinksDynamic(links);

themer.addEventListener("input", e => {
    changeTheme(e);
})

saveButton.addEventListener('click', saveCV);

// ====================================================================
//INSERTION AND DELETION
// ====================================================================

const addItem = event => {
    // Copy the <li> element and its child nodes
    let targetClone = event.target.parentElement.cloneNode(true);
    event.target.parentElement.parentElement.appendChild(targetClone);
    attachMouseEvents(sortBehaviorElements(".action-btn"), 'mouseenter', 'mouseleave')
    attachMouseEvents(sortBehaviorElements(".sort"), 'mouseleave', 'mouseenter')
}

const deleteItem = event => {
    let target = event.target.parentElement;
    let parentOfParent = event.target.parentElement.parentElement;
    //Experience Block to have a min of one item
    if (parentOfParent.classList[0] === "experience-block") {
        if (parentOfParent.children.length >= 3) {
            parentOfParent.removeChild(target);
        }
    } else if (parentOfParent.children.length > 1) { //Cover list items, awards, certification, skills
        parentOfParent.removeChild(target);
    } else if (parentOfParent.classList[0] === "edu-parent") {
        let superParent = parentOfParent.parentElement
        if (superParent.children.length > 1) {
            superParent.removeChild(parentOfParent)
        }
    }
}


// ====================================================================
//TOGGLE SECTION ON AND OFF:
// ====================================================================

const sectionTogglers = document.querySelectorAll('.toggle-state');

const toggledOff = [];

const attachToggleEvents = (nodeList) => {
    nodeList.forEach(toggleItem => {
        toggleItem.addEventListener('change', () => {
            //Get target of each toggle:
            let target = document.querySelector(`.${toggleItem.name}`);
            if (toggleItem.name === "website") {
                if (toggleItem.checked) {
                    target.style.visibility = 'visible';
                } else {
                    toggledOff.push(target)
                    target.style.visibility = 'hidden';
                }
            } else {
                if (toggleItem.checked) {
                    target.style.display = 'unset';
                } else {
                    toggledOff.push(target)
                    target.style.display = 'none';
                }
            }
        })
    })
}

attachToggleEvents(sectionTogglers);