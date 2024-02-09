// Strategy Design Pattern.

// SortingStrategy Interface
class SortingStrategy {
    sort(data) {
      throw new Error('sort method must be implemented by concrete strategies');
    }
  }
  
  // Concrete Sorting Strategies
  class BubbleSort extends SortingStrategy {
    sort(data) {
      console.log('Bubble Sort');
      // Implementation of Bubble Sort algorithm
      return data.slice().sort((a, b) => a - b);
    }
  }
  
  class QuickSort extends SortingStrategy {
    sort(data) {
      console.log('Quick Sort');
      // Implementation of Quick Sort algorithm
      return data.slice().sort((a, b) => a - b);
    }
  }
  
  class MergeSort extends SortingStrategy {
    sort(data) {
      console.log('Merge Sort');
      // Implementation of Merge Sort algorithm
      return data.slice().sort((a, b) => a - b);
    }
  }
  
  // SortingContext
  class SortingContext {
    constructor(sortingStrategy) {
      this.sortingStrategy = sortingStrategy;
    }
  
    setSortingStrategy(sortingStrategy) {
      this.sortingStrategy = sortingStrategy;
    }
  
    performSort(data) {
      return this.sortingStrategy.sort(data);
    }
  }
  
  // Client Code
  const bubbleSort = new BubbleSort();
  const quickSort = new QuickSort();
  const mergeSort = new MergeSort();
  
  const sortingContext = new SortingContext(bubbleSort);
  
  const dataToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  
  sortingContext.performSort(dataToSort);
  // Output: Bubble Sort (or Quick Sort, depending on the current strategy)
  
  sortingContext.setSortingStrategy(quickSort);
  sortingContext.performSort(dataToSort);
  // Output: Quick Sort
  
  sortingContext.setSortingStrategy(mergeSort);
  sortingContext.performSort(dataToSort);
  // Output: Merge Sort
  

// interface SortingStrategy {
//     sort(data: number[]): number[];
//   }

//   // Concrete Strategies
//   class BubbleSort implements SortingStrategy {
//     sort(data: number[]): number[] {
//       // Implementation of Bubble Sort algorithm
//       return data.sort((a, b) => a - b);
//     }
//   }

//   class QuickSort implements SortingStrategy {
//     sort(data: number[]): number[] {
//       // Implementation of Quick Sort algorithm
//       return data.sort((a, b) => a - b);
//     }
//   }

//   // Context
//   class SortingContext {
//     private strategy: SortingStrategy;

//     constructor(strategy: SortingStrategy) {
//       this.strategy = strategy;
//     }

//     setStrategy(strategy: SortingStrategy): void {
//       this.strategy = strategy;
//     }

//     performSort(data: number[]): number[] {
//       return this.strategy.sort(data);
//     }
//   }

//   // Client Code
//   const dataToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
//   const bubbleSort = new BubbleSort();
//   const quickSort = new QuickSort();

//   const context = new SortingContext(bubbleSort);
//   console.log(context.performSort(dataToSort)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

//   context.setStrategy(quickSort);
//   console.log(context.performSort(dataToSort)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
