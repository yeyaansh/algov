const linearSearchDataList = [
  {
    id: 1,
    title: "C",
    extension: "c",
    generalLanguage: `
    #include <stdio.h>
  
int main() {
      int size, target;
  
      // Ask the user for the size of the array
      printf("Enter the size of the array: ");
      scanf("%d", &size);
  
      int arr[size]; // Declare an array of the given size
  
      // Ask the user to input array elements
      printf("Enter %d elements for the array:\\n", size);
      for (int i = 0; i < size; i++) {
          scanf("%d", &arr[i]);
      }
  
      // Ask the user for the target value to search
      printf("Enter the target value to search: ");
      scanf("%d", &target);
  
      int found = 0; // Flag to check if target is found
      int index = -1; // To store the index of the target if found
  
      // Linear search logic
      for (int i = 0; i < size; i++) {
          if (arr[i] == target) {
              found = 1; // Set flag to 1 if target is found
              index = i; // Store the index
              break; // Exit the loop early since we found the target
          }
      }
  
      // Display the result
      if (found == 1) {
          printf("Element %d found at index %d.\\n", target, index);
      } else {
          printf("Element %d not found in the array.\\n", target);
      }
  
      return 0;
  }`,
  },
  {
    id: 2,
    title: "C++",
    extension: "cpp",
    generalLanguage: `#include <iostream>
using namespace std;

int main() {
    int size, target;

    // Ask the user for the size of the array
    cout << "Enter the size of the array: ";
    cin >> size;

    int arr[size]; // Declare an array of the given size

    // Ask the user to input array elements
    cout << "Enter " << size << " elements for the array:\\n";
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    // Ask the user for the target value to search
    cout << "Enter the target value to search: ";
    cin >> target;

    int found = 0; // Flag to check if target is found
    int index = -1; // To store the index of the target if found

    // Linear search logic
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            found = 1; // Set flag to 1 if target is found
            index = i; // Store the index
            break; // Exit the loop early since we found the target
        }
    }

    // Display the result
    if (found == 1) {
        cout << "Element " << target << " found at index " << index << ".\\n";
    } else {
        cout << "Element " << target << " not found in the array.\\n";
    }

    return 0;
}`,
  },
  {
    id: 3,
    title: "Java",
    extension: "java",
    generalLanguage: `import java.util.Scanner;

public class LinearSearch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ask the user for the size of the array
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        int[] arr = new int[size]; // Declare an array of the given size

        // Ask the user to input array elements
        System.out.println("Enter " + size + " elements for the array:");
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }

        // Ask the user for the target value to search
        System.out.print("Enter the target value to search: ");
        int target = scanner.nextInt();

        int found = 0; // Flag to check if target is found
        int index = -1; // To store the index of the target if found

        // Linear search logic
        for (int i = 0; i < size; i++) {
            if (arr[i] == target) {
                found = 1; // Set flag to 1 if target is found
                index = i; // Store the index
                break; // Exit the loop early since we found the target
            }
        }

        // Display the result
        if (found == 1) {
            System.out.println("Element " + target + " found at index " + index + ".");
        } else {
            System.out.println("Element " + target + " not found in the array.");
        }

        scanner.close(); // Close the scanner
    }
}`,
  },
  {
    id: 4,
    title: "Javascript",
    extension: "javascript",
    generalLanguage: `// Ask the user for the size of the array
let size = parseInt(prompt("Enter the size of the array:"));

let arr = []; // Declare an empty array

// Ask the user to input array elements
console.log("Enter " + size + " elements for the array:");
for (let i = 0; i < size; i++) {
    arr.push(parseInt(prompt("Enter element " + (i + 1) + ":")));
}

// Ask the user for the target value to search
let target = parseInt(prompt("Enter the target value to search:"));

let found = false; // Flag to check if target is found
let index = -1; // To store the index of the target if found

// Linear search logic
for (let i = 0; i < size; i++) {
    if (arr[i] === target) {
        found = true; // Set flag to true if target is found
        index = i; // Store the index
        break; // Exit the loop early since we found the target
    }
}

// Display the result
if (found) {
    console.log("Element " + target + " found at index " + index + ".");
} else {
    console.log("Element " + target + " not found in the array.");
}`,
  },
  {
    id: 5,
    title: "Python",
    extension: "python",
    generalLanguage: `# Ask the user for the size of the array
size = int(input("Enter the size of the array: "))

arr = []  # Declare an empty list

# Ask the user to input array elements
print(f"Enter {size} elements for the array:")
for i in range(size):
    arr.append(int(input(f"Enter element {i + 1}: ")))

# Ask the user for the target value to search
target = int(input("Enter the target value to search: "))

found = False  # Flag to check if target is found
index = -1  # To store the index of the target if found

# Linear search logic
for i in range(size):
    if arr[i] == target:
        found = True  # Set flag to True if target is found
        index = i  # Store the index
        break  # Exit the loop early since we found the target

# Display the result
if found:
    print(f"Element {target} found at index {index}.")
else:
    print(f"Element {target} not found in the array.")`,
  },
];

export default linearSearchDataList;
