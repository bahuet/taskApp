export default (namesNum, tasksNum) => {

  // Il n'est pas impossible que j'aie légérement overengineered cette partie

  // generate initial values for demo purposes
  const randomValueFromArray = array => array[Math.floor(Math.random() * array.length)]

  const createRandomName = () => {
    const firstNames = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
    const lastNames = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]
    return randomValueFromArray(firstNames) + ' ' + randomValueFromArray(lastNames)
  }

  let userId = 1100000
  let taskId = 2100000

  const getNewUserId = () => userId++
  const getNewTaskId = () => taskId++


  const createTask = (taskText) => {
    //Une tâche ne peut pas être 'completed' sans être 'focused', on le prend en compte pendant la génération des valeurs initiales
    const fixedRandomValue = Math.floor(Math.random() * 3)
    const randomUser = randomValueFromArray(fakeUserssArray)
    return (
      {
        id: getNewTaskId(),
        userName: randomUser.name,
        userId: randomUser.id,
        text: taskText,
        completed: fixedRandomValue ? false : (Math.floor(Math.random() * 2) ? false : true),
        urgent: Math.floor(Math.random() * 3) ? false : true,
        focus: fixedRandomValue ? false : true
      })
  }

  const createUser = (name) => {
    const roles = ['Manager', 'Designer', 'Comptable', 'CEO', 'CSO', 'DRH', 'R&D', 'Développeur front', 'Développeur front']
    return (
      {
        id: getNewUserId(),
        name: name || createRandomName(),
        role: randomValueFromArray(roles)
      })
  }

  const createRandomTask = () => createTask(`Tâche aléatoire ${taskId} générée automatiquement pour la démo`)

  const fakeDataGen = (initialArray, randomValueFn, number) => {
    const out = [...initialArray]
    for (let i = 0; i < number; i++) {
      const value = randomValueFn()
      out.push(value)
    }
    return out
  }

  const initialUserNames = ['Eloi', 'George Foreman', 'Dmitri Mendeleev', '吕小军',]
    .map(name => createUser( name))
  const fakeUserssArray = fakeDataGen(initialUserNames, createUser, namesNum)

  let initialTasks = ['Relancer le fournisseur pour savoir les dates de livraison', 'Régler la facture du fournisseur', 'Refaire du café', "Traduire la notice d'utilisation en anglais"]
    .map(task => createTask(task))

  const fakeTasksArray = fakeDataGen(initialTasks, createRandomTask, tasksNum)

  return [fakeUserssArray, fakeTasksArray]
}