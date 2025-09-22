const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	   const prices = document.querySelectorAll(".price");
  let total = 0;

  // 2. Calculate sum
  prices.forEach(price => {
    total += parseFloat(price.textContent,10);
  });

  // 3. Get the table
  const table = document.querySelector("table");

  // 4. Remove old total row if it exists
  const oldTotalRow = document.querySelector(".total-row");
  if (oldTotalRow) oldTotalRow.remove();

  // 5. Create new total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

  

getSumBtn.addEventListener("click", getSum);

