const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});


describe("deterministicPartitionKey", () => {
  test("should return the trivial partition key if event is undefined", () => {
    expect(deterministicPartitionKey(undefined)).toBe("0");
  });

  test("should return the trivial partition key if event is null", () => {
    expect(deterministicPartitionKey(null)).toBe("0");
  });

  test("should return the partition key if event has a partitionKey property", () => {
    const event = { partitionKey: "my_partition_key" };
    expect(deterministicPartitionKey(event)).toBe("my_partition_key");
  });

  test("should hash the event data if event does not have a partitionKey property", () => {
    const event = { key1: "value1", key2: "value2" };
    const hashed = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hashed);
  });

  test("should return a string if the candidate is not a string", () => {
    expect(deterministicPartitionKey({ foo: "bar" })).toBe(JSON.stringify({ foo: "bar" }));
  });
});
