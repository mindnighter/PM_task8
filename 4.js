const assert = require('assert');

const extendWithEndless = (...rest) => rest.reduce((accumulator, currentObject)=>Object.assign(accumulator, currentObject));

assert.deepStrictEqual(extendWithEndless(

    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },
    
    { isValid:
    false,
    additionalProp: { thisIsGoodProp: 123 } },
    
    { prop3:
    true },
    
    { prop4:
    true },
    
    { isValid:
    [false, false] },
    
    ),
    
    {
    
    flatWhite: ['doppio', 'hot', 'milk'],
    
    isValid: [false, false],
    
    additionalProp: { thisIsGoodProp: 123 },
    
    prop3: true,
    
    prop4: true
    
    }
    
    );
    
    
    console.log('Looks good');