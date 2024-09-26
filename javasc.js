document.querySelectorAll(".title").forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.nextElementSibling; // Lấy phần tử tiếp theo
    const isOpen = content.style.display === "block"; // Kiểm tra nếu nội dung đang mở

    // Chuyển đổi hiển thị nội dung
    content.style.display = isOpen ? "none" : "block";

    // Cập nhật dấu hiệu + hoặc -
    item.textContent = isOpen
      ? `+ ${item.textContent.slice(2)}`
      : `- ${item.textContent.slice(2)}`;
  });
});
// Mở rộng tất cả
document.getElementById("expand-all").addEventListener("click", () => {
  const contents = document.querySelectorAll(".content");
  const titles = document.querySelectorAll(".title");
  let allOpen = true;

  // Kiểm tra xem tất cả nội dung đã mở chưa
  contents.forEach((content) => {
    if (content.style.display !== "block") {
      allOpen = false;
    }
  });

  // Mở hoặc đóng tất cả
  contents.forEach((content) => {
    content.style.display = allOpen ? "none" : "block"; // Chuyển đổi giữa mở và đóng
  });

  // Cập nhật tiêu đề cho từng mục
  titles.forEach((title) => {
    title.textContent = allOpen
      ? `+ ${title.textContent.slice(2)}`
      : `- ${title.textContent.slice(2)}`;
  });
});
