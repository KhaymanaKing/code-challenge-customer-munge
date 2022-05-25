// IMPORT MODULES under test here:
import { 
    addAllAges,
    getAllCoolFactorsOfEachCar,
    getAverageCoolFactor,
    getGenderBreakdownOfEachCar,
    getGenderBreakdownOfFordOwners,
    getTotalOfEachGender,
    greetUsers,
    greetUsersOverAge60,
} from '../functions.js';
import customers from './data.js';

const { test, skip } = QUnit;

test('greetUsers', (expect) => {
    const expected = 	
    [
        'Hello Suzi Summerson',
        'Hello Boot Penton',
        'Hello Cacilia Caramuscia',
        'Hello Mattie Mungane',
        'Hello Kathryne Gostling',
        'Hello Cristal Oakman',
        'Hello Mahmud Shingler',
        'Hello Kenny Kepe',
        'Hello Elena Guisby',
        'Hello Irene Kynvin',
        'Hello Debor Lashmar',
        'Hello Christian Churchill',
        'Hello Fawnia Cowdroy',
        'Hello Eli Perigo',
        'Hello Parker Goodboddy',
        'Hello Leeland Bonome',
        'Hello Lowe Driussi',
        'Hello Tracy Chidlow',
        'Hello Dimitri Ochiltree',
        'Hello Sascha Yanin',
        'Hello Emmaline Horribine',
        'Hello Erinna Swires',
        'Hello Erroll Reade',
        "Hello Ilaire O'Codihie",
        'Hello Anatol Gulley',
        'Hello Celestine Teodori',
        'Hello Brandi Sawdon',
        'Hello Atlanta Oneil',
        'Hello Salomone Merkle',
        'Hello Alta Sulter',
        'Hello Marys Allsopp',
        'Hello Marilin Ellacott',
        'Hello Alexandros Cornell',
        'Hello Matti Haller',
        'Hello Henryetta Cheng',
        'Hello Gennie Saura',
        'Hello Sherwynd Wiggans',
        'Hello Thorn McMeekin',
        'Hello Esmaria Moukes',
        'Hello Dietrich Gladebeck',
        'Hello Karol Rosa',
        'Hello Manya Fodden',
        'Hello Casi Waterland',
        'Hello Munroe Walthall',
        'Hello Tannie Sedman'
    ];

    const actual = greetUsers(customers);

    expect.deepEqual(actual, expected);
});


test('greetUsersOverAge60', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Cristal Oakman!',
        'Hello Kenny Kepe!',
        'Hello Dimitri Ochiltree!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Alexandros Cornell!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsersOverAge60(customers);

    expect.deepEqual(actual, expected);
});

test('addAllAges', (expect) => {
    const expected = 2125;

    const actual = addAllAges(customers);

    expect.equal(actual, expected);
});

test('getAverageCoolFactor', (expect) => {
    const expected = 5.088888888888889;

    const actual = getAverageCoolFactor(customers);

    expect.equal(actual, expected);
});

test('getTotalOfEachGender', (expect) => {
    const expected = 	
    {
        'Bigender': 1,
        'Female': 19,
        'Genderqueer': 1,
        'Male': 23,
        'Non-binary': 1
    };

    const actual = getTotalOfEachGender(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfFordOwners', (expect) => {
    const expected = 	
    {
        'Female': 1,
        'Male': 2
    };

    const actual = getGenderBreakdownOfFordOwners(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': {
            'Male': 1
        },
        'Audi': {
            'Female': 1
        },
        'BMW': {
            'Male': 1
        },
        'Buick': {
            'Female': 1,
            'Male': 1
        },
        'Cadillac': {
            'Male': 1,
            'Non-binary': 1
        },
        'Chevrolet': {
            'Female': 1,
            'Male': 3
        },
        'Chrysler': {
            'Female': 1,
            'Genderqueer': 1
        },
        'Dodge': {
            'Female': 2,
            'Male': 1
        },
        'Eagle': {
            'Male': 1
        },
        'Ford': {
            'Female': 1,
            'Male': 2
        },
        'GMC': {
            'Female': 2,
            'Male': 2
        },
        'Infiniti': {
            'Female': 1
        },
        'Jeep': {
            'Female': 1
        },
        'Kia': {
            'Male': 1
        },
        'Lexus': {
            'Male': 1
        },
        'Mazda': {
            'Male': 1
        },
        'Mercedes-Benz': {
            'Female': 1
        },
        'Mercury': {
            'Male': 1
        },
        'Mitsubishi': {
            'Male': 1
        },
        'Oldsmobile': {
            'Male': 1
        },
        'Peugeot': {
            'Female': 1
        },
        'Pontiac': {
            'Female': 1
        },
        'Porsche': {
            'Female': 1,
            'Male': 1
        },
        'Scion': {
            'Female': 1
        },
        'Subaru': {
            'Female': 1
        },
        'Toyota': {
            'Bigender': 1,
            'Female': 1,
            'Male': 2
        },
        'Volvo': {
            'Female': 1,
            'Male': 1
        }
    };

    const actual = getGenderBreakdownOfEachCar(customers);
    
    expect.deepEqual(actual, expected);
});

test('getAllCoolFactorsOfEachCar', (expect) => {
    const expected = 	
    {
        'Alfa Romeo': {
            '6': 1
        },
        'Audi': {
            '1': 1
        },
        'BMW': {
            '5': 1
        },
        'Buick': {
            '3': 1,
            '4': 1
        },
        'Cadillac': {
            '1': 1,
            '7': 1
        },
        'Chevrolet': {
            '1': 1,
            '2': 1,
            '8': 1,
            '9': 1
        },
        'Chrysler': {
            '4': 1,
            '9': 1
        },
        'Dodge': {
            '10': 2,
            '8': 1
        },
        'Eagle': {
            '9': 1
        },
        'Ford': {
            '10': 1,
            '2': 1,
            '5': 1
        },
        'GMC': {
            '10': 1,
            '6': 2,
            '8': 1
        },
        'Infiniti': {
            '2': 1
        },
        'Jeep': {
            '5': 1
        },
        'Kia': {
            '2': 1
        },
        'Lexus': {
            '4': 1
        },
        'Mazda': {
            '3': 1
        },
        'Mercedes-Benz': {
            '3': 1
        },
        'Mercury': {
            '2': 1
        },
        'Mitsubishi': {
            '4': 1
        },
        'Oldsmobile': {
            '5': 1
        },
        'Peugeot': {
            '1': 1
        },
        'Pontiac': {
            '8': 1
        },
        'Porsche': {
            '7': 1,
            '8': 1
        },
        'Scion': {
            '2': 1
        },
        'Subaru': {
            '2': 1
        },
        'Toyota': {
            '1': 1,
            '2': 1,
            '3': 1,
            '8': 1
        },
        'Volvo': {
            '4': 1,
            '9': 1
        }
    };	
    

    const actual = getAllCoolFactorsOfEachCar(customers);

    expect.deepEqual(actual, expected);

});

skip('getAverageCoolFactorOfEachCar', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getCoolFactorsByAgeBracket', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorByAgeBracket', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
