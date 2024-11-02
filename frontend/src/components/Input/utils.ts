export const requiredFields = (name: string, requirements: any) => {
    const key = name?.split(".");

    const f = "fields";
    const test = "exclusiveTests";
    const required = "required";
    const value = "ㅤ*";

    switch (key.length) {
        case 1:
            return requirements[f][key[0]]?.[test][required] && value;

        case 2:
            return (
                requirements[f][key[0]][f][key[1]]?.[test][required] && value
            );

        case 3:
            return (
                requirements[f][key[0]][f][key[1]][f][key[2]]?.[test][
                    required
                ] && value
            );
    }
};
