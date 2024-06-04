"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      { name: "ROLE_LIST_VIEW" },
      { name: "ROLE_ADD" },
      { name: "ROLE_EDIT" },
      { name: "ROLE_DELETE" },
    ]);
    await queryInterface.bulkInsert("users", [
      { name: "test1", login: "test1", password: "0000" },
    ]);
    await queryInterface.bulkInsert("userRoles", [
      { userId: 1, roleId: 1 },
      { userId: 1, roleId: 2 },
      { userId: 1, roleId: 3 },
      { userId: 1, roleId: 4 },
    ]);
    await queryInterface.bulkInsert("simpleDirectories", [
      {
        name: "test1",
      },
      {
        name: "test2",
      },
      {
        name: "test3",
      },
      {
        name: "test4",
      },
      {
        name: "test5",
      },
      {
        name: "test6",
      },
      {
        name: "test7",
      },
      {
        name: "test8",
      },
      {
        name: "test9",
      },
      {
        name: "test10",
      },
    ]); // не менее 10
    await queryInterface.bulkInsert("treeDirectories", [
      {
        name: "test1",
      },
      {
        name: "test2",
        parentId: 1,
      },
      {
        name: "test3",
        parentId: 2,
      },
      {
        name: "test4",
        parentId: 3,
      },
      {
        name: "test5",
        parentId: 1,
      },
      {
        name: "test6",
        parentId: 2,
      },
      {
        name: "test7",
        parentId: 3,
      },
      {
        name: "test8",
        parentId: 1,
      },
      {
        name: "test9",
        parentId: 2,
      },
      {
        name: "test10",
        parentId: 3,
      },
      {
        name: "test11",
        parentId: 1,
      },
      {
        name: "test12",
        parentId: 2,
      },
    ]); // не менее 10
    await queryInterface.bulkInsert("treeDirectoryAncestors", [
      {
        ancestorId: 1,
        folderId: 2,
      },
      {
        ancestorId: 1,
        folderId: 3,
      },
      {
        ancestorId: 2,
        folderId: 4,
      },
      {
        ancestorId: 2,
        folderId: 5,
      },
      {
        ancestorId: 3,
        folderId: 6,
      },
      {
        ancestorId: 3,
        folderId: 7,
      },
      {
        ancestorId: 4,
        folderId: 8,
      },
      {
        ancestorId: 1,
        folderId: 9,
      },
    ]);
    await queryInterface.bulkInsert("products", [
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test112562156",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test251251",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test5125121",
        price: 2125125.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1125412512",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test126161",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1256161",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test251612651",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1125125",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test115212512",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test161241",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1231241",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1123123",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1123124",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1324311",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1123123",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1123123",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test15125161",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test11251241",
        price: 2.2215125,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1125125",
        price: 2.212512,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1125161265",
        price: 2.21245125,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1125125",
        price: 2.51242,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1261261",
        price: 2241.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test12151261",
        price: 2123.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test125161256",
        price: 2.211,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1126161",
        price: 2.22132,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 1,
        folder_ID: 3,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test16167124",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 2,
        folder_ID: 4,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test112312516",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 3,
        folder_ID: 5,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1125125",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 4,
        folder_ID: 6,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test1124125",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 5,
        folder_ID: 7,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test41412",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 6,
        folder_ID: 8,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
      {
        name: "test555",
        price: 2.2,
        createdAt: new Date().toJSON().substring(0, 10),
        updatedAt: new Date(),
        simpleD_ID: 7,
        folder_ID: 9,
        description:
          "YQPEyLsEHhECVMwGFgFyXNIeWISEUbsd0Cr90kBuACYoy9xCquOU3slbIIGkurqoYNaRF2j86R0hX6a7ard7L0KrP40ysdCi03WhuUbezifZLUMl1T8aB4c48fJ2xTYShqNWSlKCQgEiD7uZvFHMnOMU25BQFetyaomuVSyEl4NqmKRYUdHWqwvIH7XWK4xBQzqEYkATywh5IJOiJdJx4IldXaege7vpP8Fr7ouWNF5P6GkYbdPItVYtYgBa8uxa",
      },
    ]); // не менее 50
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
