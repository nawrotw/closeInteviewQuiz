import { Item } from "./types/Item";

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];
// const sizes = ['tiny'];
// const colors = ['blue'];
// const fruits = ['apple', "banana"];

export const items: Item[] = sizes.reduce(
    (items, size) => [
        ...items,
        ...fruits.reduce(
            (acc, fruit) => [
                ...acc,
                ...colors.reduce(
                    (acc, color) => [
                        ...acc,
                        {
                            name: `${size} ${color} ${fruit}`,
                            color,
                        },
                    ],
                    [],
                ),
            ],
            [],
        ),
    ],
    [],
);
