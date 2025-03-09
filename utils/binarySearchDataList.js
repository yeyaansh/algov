import binaryImage from "../utils/imageFolder/binaryImage.webp";

const binaryDataList = [
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

    // Ask the user to input sorted array elements
    printf("Enter %d sorted elements for the array:\\n", size);
    for (int i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }

    // Ask the user for the target value to search
    printf("Enter the target value to search: ");
    scanf("%d", &target);

    int left = 0; // Leftmost index of the search range
    int right = size - 1; // Rightmost index of the search range
    int found = 0; // Flag to check if target is found
    int index = -1; // To store the index of the target if found

    // Binary search logic
    while (left <= right) {
        int mid = left + (right - left) / 2; // Calculate the middle index

        if (arr[mid] == target) {
            found = 1; // Set flag to 1 if target is found
            index = mid; // Store the index
            break; // Exit the loop early since we found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
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

    // Ask the user to input sorted array elements
    cout << "Enter " << size << " sorted elements for the array:\\n";
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    // Ask the user for the target value to search
    cout << "Enter the target value to search: ";
    cin >> target;

    int left = 0; // Leftmost index of the search range
    int right = size - 1; // Rightmost index of the search range
    bool found = false; // Flag to check if target is found
    int index = -1; // To store the index of the target if found

    // Binary search logic
    while (left <= right) {
        int mid = left + (right - left) / 2; // Calculate the middle index

        if (arr[mid] == target) {
            found = true; // Set flag to true if target is found
            index = mid; // Store the index
            break; // Exit the loop early since we found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    // Display the result
    if (found) {
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

public class BinarySearch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Ask the user for the size of the array
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        int[] arr = new int[size]; // Declare an array of the given size

        // Ask the user to input sorted array elements
        System.out.println("Enter " + size + " sorted elements for the array:");
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }

        // Ask the user for the target value to search
        System.out.print("Enter the target value to search: ");
        int target = scanner.nextInt();

        int left = 0; // Leftmost index of the search range
        int right = size - 1; // Rightmost index of the search range
        boolean found = false; // Flag to check if target is found
        int index = -1; // To store the index of the target if found

        // Binary search logic
        while (left <= right) {
            int mid = left + (right - left) / 2; // Calculate the middle index

            if (arr[mid] == target) {
                found = true; // Set flag to true if target is found
                index = mid; // Store the index
                break; // Exit the loop early since we found the target
            } else if (arr[mid] < target) {
                left = mid + 1; // Search the right half
            } else {
                right = mid - 1; // Search the left half
            }
        }

        // Display the result
        if (found) {
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

// Ask the user to input sorted array elements
console.log("Enter " + size + " sorted elements for the array:");
for (let i = 0; i < size; i++) {
    arr.push(parseInt(prompt("Enter element " + (i + 1) + ":")));
}

// Ask the user for the target value to search
let target = parseInt(prompt("Enter the target value to search:"));

let left = 0; // Leftmost index of the search range
let right = size - 1; // Rightmost index of the search range
let found = false; // Flag to check if target is found
let index = -1; // To store the index of the target if found

// Binary search logic
while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2); // Calculate the middle index

    if (arr[mid] === target) {
        found = true; // Set flag to true if target is found
        index = mid; // Store the index
        break; // Exit the loop early since we found the target
    } else if (arr[mid] < target) {
        left = mid + 1; // Search the right half
    } else {
        right = mid - 1; // Search the left half
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

# Ask the user to input sorted array elements
print(f"Enter {size} sorted elements for the array:")
for i in range(size):
    arr.append(int(input(f"Enter element {i + 1}: ")))

# Ask the user for the target value to search
target = int(input("Enter the target value to search: "))

left = 0  # Leftmost index of the search range
right = size - 1  # Rightmost index of the search range
found = False  # Flag to check if target is found
index = -1  # To store the index of the target if found

# Binary search logic
while left <= right:
    mid = left + (right - left) // 2  # Calculate the middle index

    if arr[mid] == target:
        found = True  # Set flag to True if target is found
        index = mid  # Store the index
        break  # Exit the loop early since we found the target
    elif arr[mid] < target:
        left = mid + 1  # Search the right half
    else:
        right = mid - 1  # Search the left half

# Display the result
if found:
    print(f"Element {target} found at index {index}.")
else:
    print(f"Element {target} not found in the array.")`,
  },
];

export default binaryDataList;

export function BinaryDescription() {
  return (
    <>
      <div className="whitespace-pre-wrap font-mono">
        {
`
Imagine you’re playing a guessing game with a friend. They’re thinking of a number between 1 and 100, and you have to guess it. Instead of guessing every number one by one, you use a smarter strategy: you always guess the middle number. If your guess is too high, you ignore the higher half. If it’s too low, you ignore the lower half. You keep doing this until you find the correct number.

Binary Search works exactly like this. It’s a super-efficient way to find a specific value (called the target) in a sorted list. Unlike Linear Search, which checks every element one by one, Binary Search halves the search space with each step, making it much faster.

`}
        <div className="flex justify-center items-center overflow-hidden medium:h-[40rem] small:h-[30rem]">
          <div className="">
            <img src={binaryImage} width="800px" className="bg-white "></img>
          </div>
        </div>

{`
Let’s Break It Down with an Example:

We have a sorted array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91].
We want to find the number 23 in this array.
Step-by-Step Process:

Find the middle element:
The array has 10 elements. The middle is at position (0 + 9) / 2 = 4 (we use 0-based indexing).
The middle element is 16.
Ask: Is 16 equal to 23?
No.
Is 16 less than 23?
Yes. So, we ignore the left half (all numbers less than or equal to 16).

Updated search space: [23, 38, 56, 72, 91].

Find the new middle element:
The new search space has 5 elements. The middle is at position (5 + 9) / 2 = 7.
The middle element is 56.
Ask: Is 56 equal to 23?
No.
Is 56 less than 23?
No. So, we ignore the right half (all numbers greater than or equal to 56).

Updated search space: [23, 38].

Find the new middle element:
The new search space has 2 elements. The middle is at position (5 + 6) / 2 = 5.
The middle element is 23.
Ask: Is 23 equal to 23?
Yes! You’ve found the target.

What Happens If the Target Isn’t in the Array?

Let’s say you were searching for the number 20 instead of 23. Here’s what would happen:

Middle element: 16.
Is 16 equal to 20? No.
Is 16 less than 20? Yes.
Ignore the left half.
Updated search space: [23, 38, 56, 72, 91].

Middle element: 56.
Is 56 equal to 20? No.
Is 56 less than 20? No.
Ignore the right half.
Updated search space: [23, 38].

Middle element: 23.
Is 23 equal to 20? No.
Is 23 less than 20? No.
Ignore the right half.
Updated search space: [] (empty).

Since the search space is now empty, you conclude that 20 is not in the array.
Why Is It Called "Binary"?

The word "binary" means "two parts." In Binary Search, you repeatedly divide the search space into two halves and discard one half based on the comparison with the middle element. This makes the search process extremely fast.
When Should You Use Binary Search?

Sorted lists: Binary Search only works on sorted lists. If the list isn’t sorted, you’ll need to sort it first (which takes extra time).

Large lists: Binary Search is much faster than Linear Search for large lists because it halves the search space with each step.

Algorithm Complexity:

Binary Search is incredibly efficient. Here’s why:

Time Complexity:

Best Case: O(1) – The target is the middle element.

Worst Case: O(log n) – The target is at the beginning or end, or not in the list at all.

Average Case: O(log n) – On average, it takes logarithmic time to find the target.

Here, n is the number of elements in the array. For example, if the array has 1,000 elements, Binary Search will take at most 10 steps (because log₂1000 ≈ 10).

Space Complexity:

Binary Search uses constant space (O(1)) because it doesn’t require extra memory proportional to the input size. It only needs a few variables to keep track of the search space.

Key Takeaways:

Binary Search is a fast and efficient way to find a target in a sorted list.

It works by repeatedly dividing the search space in half.

It has a time complexity of O(log n), which is much faster than Linear Search’s O(n) for large lists.

It only works on sorted lists, so make sure your data is sorted before using it.

Final Thought:

Think of Binary Search as the "smart guessing game" method. Instead of checking every possibility, you eliminate half of the options with each step. It’s like finding a word in a dictionary by flipping to the middle and narrowing down your search from there. Fast, efficient, and elegant!`}
      </div>
    </>
  );
}
