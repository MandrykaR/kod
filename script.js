for (let i = 1; i <= 5; i += 1) {
    if (i > 1) {
        console.log(`=> ${i} <=`);
    }

    for (let j = 1; j <= 10; j += 1) {
        const product = i * j;
        console.log(`${i} x ${j} = ${product}`);
    }
}