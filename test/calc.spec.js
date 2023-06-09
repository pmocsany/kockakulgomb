
describe ('A calcRadius függvény tesztje',()=>{
it('Bemenet 30-ra elvárt érték: 4.743416490252569',()=>{
    let actual = calcRadius(30)
    let expected = 4.743416490252569
    expect(actual).toBe(expected)
})

it('Bemenet 130-ra elvárt érték: 9.874208829065749', ()=>{
    let actual = calcRadius(130)
    let expected = 9.874208829065749
    expect(actual).toBe(expected)
})
it('Bemenet 500-ra elvárt érték: 19.364916731037084', ()=>{
    let actual = calcRadius(500)
    let expected = 19.364916731037084
    expect(actual).toBe(expected)
})

})