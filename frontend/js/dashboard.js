document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  if (username) {
    document.getElementById("username").innerText = username;
  }

  loadTasks();
  loadExpenses();

  const taskForm = document.getElementById("taskForm");
  if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeTaskModal();

      const title = document.getElementById("taskTitle").value;
      const deadline = document.getElementById("taskDeadline").value;
      const category = document.getElementById("taskCategory").value;
      const status = "In Progress";

      const taskList = document.getElementById("taskList");
      taskList.innerHTML += `
        <div class="p-3 border rounded bg-gray-50 dark:bg-gray-700">
          <div class="font-medium">${title}</div>
          <div class="text-sm text-gray-500">Due: ${deadline} | Category: ${category}</div>
          <div class="mt-1 text-xs text-blue-600 dark:text-blue-300">Status: ${status}</div>
        </div>
      `;
      taskForm.reset();
    });
  }

  const expenseForm = document.getElementById("expenseForm");
  if (expenseForm) {
    expenseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeExpenseModal();

      const title = document.getElementById("expenseTitle").value;
      const amount = document.getElementById("expenseAmount").value;

      const expenseList = document.getElementById("expenseList");
      expenseList.innerHTML += `
        <div class="p-3 border rounded bg-gray-50 dark:bg-gray-700">
          <div class="font-medium">${title}</div>
          <div class="text-sm text-green-600">₹${amount}</div>
        </div>
      `;
      expenseForm.reset();
    });
  }
});

function openTaskModal() {
  document.getElementById("taskModal").classList.remove("hidden");
}
function closeTaskModal() {
  document.getElementById("taskModal").classList.add("hidden");
}
function openExpenseModal() {
  document.getElementById("expenseModal").classList.remove("hidden");
}
function closeExpenseModal() {
  document.getElementById("expenseModal").classList.add("hidden");
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = `
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-700">
      <div class="font-medium">Complete Project Report</div>
      <div class="text-sm text-gray-500">Due: 2025-07-25 | Category: Work</div>
      <div class="mt-1 text-xs text-blue-600 dark:text-blue-300">Status: In Progress</div>
    </div>
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-700">
      <div class="font-medium">Team Meeting</div>
      <div class="text-sm text-gray-500">Due: 2025-07-22 | Category: Meeting</div>
      <div class="mt-1 text-xs text-green-600 dark:text-green-300">Status: Complete</div>
    </div>
  `;
}

function loadExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = `
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-700">
      <div class="font-medium">Lunch</div>
      <div class="text-sm text-green-600">₹250</div>
    </div>
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-700">
      <div class="font-medium">Office Supplies</div>
      <div class="text-sm text-green-600">₹1,000</div>
    </div>
  `;
}
