describe('A bemenet tesztelése',() =>{
    it('Helyes bemenetre 1', () =>{
        let actual = checkInput(30)
        expect(actual).toBe(true)
    })
    it('Helyes bemenetre 2', ()=>{
        let actual = checkInput(130)
        expect(actual).toBe(true)
    })
    it('Helyes bemenetre 3',()=>{
        let actual = checkInput(500)
        expect(actual).toBe(true)
    })
    it('Helytelen bemenetre 1', ()=>{
        let actual = checkInput('a')
        expect(actual).toBe(false)
    })
    it('Helytelen bemenetre 2', ()=>{
        let actual = checkInput('körte')
        expect(actual).toBe(false)
    })
    it('Helytelen bemenetre 3', ()=>{
        let actual = checkInput('@')
        expect(actual).toBe(false)
    })
})