# Ep. 0.1

## async/await em callbacks

### Problema

Um parque de estacionamento tem sensores para cada lugar que indicam se o lugar
está livre ou não. O parque divide-se em secções (A, B, C, D, F, etc) e apenas
as secções são capazes de comunicar com os sensores, ou seja, em pseudo-código:

```ts
// obter lista de IDs das secções
async getSections(): Promise<string[]>

// obetr lista de IDs dos sensores ativos
async getSensorsFrom(sectionId): Promise<number[][]>

// estado do sensor
async getSensorStatus(sectonId, sensorId): Promise<boolean>

// obter lista de lugares livres num formato "flat":
// ["A#1", "A#2", "B#5"] são os lugares livres
async getAvailableParkingSpots(): Promise<string[]>
```

### Objetivo

- usar métodos como `filter`, `map`, `reduce`, `flat` e `flatMap`
- tentar aplicar o padrão TDD (Test Driven Development)

```
[1,2,3,4].map(async (i) => {
  const x = await getX(i)
  return x + i
})

Promise.all([1,2,3,4].map((i) => {
  return getX(i).then(x => x + i)
}))
```
