// new profile obj
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 25
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// destructure object with type annotation
const { name, age }: { age: number, name: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;