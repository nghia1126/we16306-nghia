import { fake } from "../data";

const EditNew={

    print(id){
        const result = fake.find((post)=>post.id === id);
        return `
        <h1>${result.id}</h1>
        `;
    },
};
export default EditNew;