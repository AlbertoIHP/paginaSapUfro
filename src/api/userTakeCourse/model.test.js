import { UserTakeCourse } from '.'

let userTakeCourse

beforeEach(async () => {
  userTakeCourse = await UserTakeCourse.create({ matriculaEstudiante: 'test', nameCurso: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = userTakeCourse.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userTakeCourse.id)
    expect(view.matriculaEstudiante).toBe(userTakeCourse.matriculaEstudiante)
    expect(view.nameCurso).toBe(userTakeCourse.nameCurso)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = userTakeCourse.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(userTakeCourse.id)
    expect(view.matriculaEstudiante).toBe(userTakeCourse.matriculaEstudiante)
    expect(view.nameCurso).toBe(userTakeCourse.nameCurso)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
