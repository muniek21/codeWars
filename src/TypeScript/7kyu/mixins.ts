// https://www.codewars.com/kata/learning-typescript-mixins/train/typescript
export class Serializable {
    public serialize (): string {
        let serialized: string[] = [];
        Object.getOwnPropertyNames(this)
            .forEach(
                propertyName => serialized.push(propertyName + ":" + Object.getOwnPropertyDescriptor(this, propertyName).value));
        return serialized.join("&");
    }

    public deserialize (source: string): void {
        console.log(source.split("&"));
        source.split("&")
            .forEach(nameAndValue => {
                let name = nameAndValue.split(":")[0];
                let value = nameAndValue.split(":")[1];
                this[name] = value;
            });
    }
}
