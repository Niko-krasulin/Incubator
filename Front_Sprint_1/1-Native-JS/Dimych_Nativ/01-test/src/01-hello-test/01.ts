const sentense = 'Hello my friends'


export function sum(a:number, b: number) {
    return a + b
}

export function mult(a:number, b: number) {
    return a * b
}

export function splitIntoWords(sentense:string) {
    const words =  sentense.toLowerCase().split(' ')

       return words.filter(el => el !== '' && el !== '-')
              .map(el => el.replace('-',''))
}