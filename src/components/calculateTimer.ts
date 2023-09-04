export function calculateTimer(inputSeconds:number):number[] {
    const minutes = Math.floor(inputSeconds/60);
    const seconds = (inputSeconds%60)

    return [minutes, seconds]
}