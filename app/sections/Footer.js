export default async function Footer() {
  return (
    <section className="mx-6 md:mx-10 border-t border-gray-100 py-5">
      <div className="flex justify-between">
        <div className="text-gray-300">Chong Xian ©2024</div>
        <div className="flex border-l border-gray-200 pl-5">
          <div className="text-gray-300 mr-5">Legacy</div>
          <a className="text-gray-300 hover:text-gray-500" href="https://2023.chongxian.dev" target="_blank">
            2023 Site
          </a>
        </div>
      </div>
    </section>
  );
}
