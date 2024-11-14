// 物件庫
const projects = [
    {
        id: "021",
        image: "assets/img/photo2_0000_list09.png",
        tags: ["扁平化", "極簡","童趣", "白","紅", "綠"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "flatten minimalist childlike"
    },
    {
        id: "022",
        image: "assets/img/photo2_0001_list08.png",
        tags: ["極簡", "童趣","紅","黃"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "minimalist childlike"
    }
    ,
    {
        id: "023",
        image: "assets/img/photo2_0002_list07.png",
        tags: ["復古", "質感","紅","紫"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "retro texture"
    }
    ,
    {
        id: "024",
        image: "assets/img/photo2_0003_list06.png",
        tags: ["扁平化", "質感","橘","黑"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "flatten texture"
    }
    ,
    {
        id: "025",
        image: "assets/img/photo2_0004_list05.png",
        tags: ["復古","極簡","紅","黃","白"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "retro minimalist"
    }
    ,
    {
        id: "026",
        image: "assets/img/photo2_0005_list04.png",
        tags: ["華麗","童趣","紅","粉"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "gorgeous childlike"
    }
    ,
    {
        id: "027",
        image: "assets/img/photo2_0006_list03.png",
        tags: ["扁平化","紅","粉"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "flatten"
    }
    ,
    {
        id: "028",
        image: "assets/img/photo2_0007_list02.png",
        tags: ["華麗","復古","金","綠"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "gorgeous retro"
    }
    ,
    {
        id: "029",
        image: "assets/img/photo2_0008_list01.png",
        tags: ["童趣","白","粉"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "childlike"
    }
    ,
    {
        id: "030",
        image: "assets/img/photo2_0008_list01.png",
        tags: ["極簡", "質感","紅","綠"],
        description: "太我国也游大问关尘老服德的是，见又了愚家不仃极云畴五罪于她一，郭不范，意恼你往慨她升下，们徒李，自月色否乐当败为守曰六五，自司他色。",
        category: "minimalist texture"
    }
];


$(function(){
    // 導入素材
    const projectContainer = $(".project_container"); 
        projects.forEach(project => {
            // 創建每個項目
            const projectItem = $(`
                <div class="project_items ${project.category}">
                    <div class="project_item">
                        <div class="class_img">
                            <img src="${project.image}" alt="">
                            <div class="hover_text">
                                <h1 class="class_id">${project.id}</h1>
                                <ul class="item_class">
                                    ${project.tags.map(tag => `<li>${tag}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="class_text">
                            <h1 class="class_id">${project.id}</h1>
                            <p>${project.description}</p>
                        </div>
                    </div>
                </div>
            `);
            // 將生成的項目附加到容器
            projectContainer.append(projectItem);
        });

        // 點擊視窗打開modal
        $(".project_item").on("click", function() {
            // 取得該 .project_item 的圖片來源
            const imgSrc = $(this).find("img").attr("src");
            
            // 設置模態框中的圖片
            $("#modalImage").attr("src", imgSrc);
            
            // 顯示模態框
            $("#modal").fadeIn(500);
        });
        $(".close, #modal").on("click", function() {
            $("#modal").fadeOut(500);
        });
        // 避免點擊模態框內的圖片關閉模態框
        $("#modalImage").on("click", function(event) {
            event.stopPropagation();
        });
});