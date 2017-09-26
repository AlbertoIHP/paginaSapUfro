import { Cursos } from '.'

let cursos

beforeEach(async () => {
  cursos = await Cursos.create({ name: 'test', description: 'test', date: 'test', user: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = cursos.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cursos.id)
    expect(view.name).toBe(cursos.name)
    expect(view.description).toBe(cursos.description)
    expect(view.date).toBe(cursos.date)
    expect(view.user).toBe(cursos.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = cursos.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(cursos.id)
    expect(view.name).toBe(cursos.name)
    expect(view.description).toBe(cursos.description)
    expect(view.date).toBe(cursos.date)
    expect(view.user).toBe(cursos.user)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
