export default function Button({ label, onClick, className }) {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

// 공통 버튼 컴포넌트임.