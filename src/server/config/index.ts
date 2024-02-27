import dotenv from "dotenv";
dotenv.config();

const mysql = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
};

const jwt = {
    secret: process.env.JWT_SECRET as string,
    expiration: process.env.JWT_EXPIRATION,
};

function hasUndefinedValues(configObj: { [key: string]: string | undefined }) {
    return Object.values(configObj).some((value) => typeof value === "undefined");
}

if (hasUndefinedValues(mysql) || hasUndefinedValues(jwt)) {
    const asterisks = new Array(59).fill("*").join("");

    console.log(`\n\n${asterisks}`);
    console.log(`***\tMissing MySQL or JWT environment variables\t***`);
    console.log(`***\tVerify that your .env file and config match\t***`);
    console.log(`${asterisks}\n\n`);

    process.exit(1);
}

export default {
    mysql,
    jwt,
};
