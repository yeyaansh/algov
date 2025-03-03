import linearImage from "../utils/imageFolder/linearImage.png";

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

export function LinearDescription() {
  return (
    <>
      <div className="whitespace-pre-wrap font-mono ">
        {`     
Linear Search is like looking for your lost keys in your house. You don’t know where they are, so you start searching room by room, checking every spot until you find them. If you’ve searched the entire house and still haven’t found them, you know they’re not there.
        
In programming terms, Linear Search is a method to find a specific value (called the key) in a list by checking each element one by one from the beginning to the end.
        
Key Points to Remember:

It works on any list: Whether the list is sorted or unsorted, Linear Search will always work.
        
It’s simple and straightforward: No fancy tricks, just checking each element one after the other.
        
It’s not the fastest for large lists: If the list is huge, Linear Search can take a long time because it checks every single element.
        
        `}
        <div className="flex justify-center items-center overflow-hidden h-[15rem]">
          <div className="rounded-[50px]">
            <img src={linearImage} width="800px" className="bg-white "></img>
          </div>
        </div>
        {`
        
Let’s Break It Down with an Example:
        
We have an array of numbers: [42, 13, 8, 64, 25, 61, 3, 28].
We want to find the number 25 in this array.
Step-by-Step Process:
        
Start at the beginning:
Look at the first number in the array, which is 42.
Ask: Is 42 equal to 25?
No. So, move to the next number.
        
Second number:
The next number is 13.
Ask: Is 13 equal to 25?
No. Move to the next number.
        
Third number:
The next number is 8.
Ask: Is 8 equal to 25?
No. Move to the next number.
        
Fourth number:
The next number is 64.
Ask: Is 64 equal to 25?
No. Move to the next number.
        
Fifth number:
The next number is 25.
Ask: Is 25 equal to 25?
Yes! You’ve found the number you were looking for.
        
What Happens If the Key Isn’t in the Array?
        
Let’s say you were searching for the number 10 instead of 25. Here’s what would happen:
        
Check 42: Not a match.
        
Check 13: Not a match.
        
Check 8: Not a match.
        
Check 64: Not a match.
        
Check 25: Not a match.
        
Check 61: Not a match.
        
Check 3: Not a match.
        
Check 28: Not a match.
        
You’ve checked every number in the array, and 10 isn’t there. So, you conclude that 10 is not in the array.
Why Is It Called "Linear"?
        
The word "linear" comes from the idea of moving in a straight line. In Linear Search, you go through the array in a straight line, checking each element one after the other. There’s no jumping around or skipping elements—just a simple, step-by-step process.
When Should You Use Linear Search?
        
Small lists: If the list is short, Linear Search is quick and easy.
        
Unsorted lists: If the list isn’t sorted, Linear Search is one of the few options you have.
        
Simplicity: If you want a method that’s easy to understand and implement, Linear Search is perfect.
        
Algorithm Complexity:
        
Let’s talk about how efficient Linear Search is:
        
Time Complexity:
        
Best Case: O(1) – The key is the first element in the array.
        
Worst Case: O(n) – The key is the last element or not in the array at all.
        
Average Case: O(n) – On average, you’ll need to check half the elements in the array.
        
Here, n is the number of elements in the array. For example, if the array has 1,000 elements, Linear Search might take up to 1,000 steps in the worst case.
        
Space Complexity:
        
Linear Search uses constant space (O(1)) because it doesn’t require extra memory proportional to the input size. It only needs a few variables to keep track of the current position.
        
Key Takeaways:
        
Linear Search is straightforward: start at the beginning and check each element.
        
It works on any list, whether it’s sorted or unsorted.
        
It’s not the fastest method for large lists, but it’s reliable and easy to use.
        
Final Thought:
        
Think of Linear Search as the "brute force" way of finding something. It’s like flipping through every page of a book to find a specific word. It might take some time, but it gets the job done!
        `}
      </div>
    </>
  );
}
