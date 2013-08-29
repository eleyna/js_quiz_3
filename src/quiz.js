//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8
function bigDiff(nums) {
  var largest;
  var second_largest;
  if (nums[0] >= nums[1]) {
    largest = nums[0];
    second_largest = nums[1];
  } else {
    largest = nums[1];
    second_largest = nums[0];
  }
  var array_size = nums.length;
  for (var i = 0; i < array_size; i++) {
    if (nums[i] > largest) {
      second_largest = largest;
      largest = nums[i];
    } else if (nums[i] > second_largest) {
      second_largest = nums[i];
    }
  }
  return largest - second_largest;
}
// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67
function averageMedian(nums) {
  var total_nums = nums.length;
  if (total_nums % 2 == 0) {
    return (nums[total_nums / 2] + nums[total_nums / 2 - 1]) / 2;
  } else {
    return (nums[Math.floor(total_nums / 2)] + nums[Math.floor(total_nums / 2) - 1] + nums[Math.floor(total_nums / 2) + 1]) / 3;
  }
}

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

function canBalance(nums) {
  var total_nums = nums.length;
  var left_side = 0;
  var right_side = 0;
  for (var i = 0; i < total_nums; i++) {
    for (var j = 0; j < nums[i] + 1; j++) {
      left_side += nums[j];
    }
    for (var k = nums[i] + 1; k < total_nums; k++) {
      right_side += nums[k];
    }
    if (left_side == right_side) {
      return true;
    }
    left_side = 0;
    right_side = 0;
  }
  return false;
}

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

// Wrote a different function than what was asked for...
function countClumps(nums) {
  var total_count = 1;
  var total_nums = nums.length;
  for (var i = 0; i < total_nums; i++) {
    var num_count = 1;
    for (var j = nums[i] + 1; j < total_nums; j++) {
      if (nums[j] == nums[i]) {
        num_count++;
      }
    }
    if (num_count > total_count) {
      total_count = num_count;
    }
  }
  return total_count;
}






