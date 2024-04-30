const person = {
    name: 'Tom',
    profiles: ['twitter', 'linkedin'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJS() {
    return (
        <>
        <div>{person.name} Learning JS</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}