import styled from "styled-components";

export const Template = styled.div`
display: flex;
align-items: center;
justify-content: center;



.content_container{
    width: 1180px;
    max-width: 100%;
    min-height: 100vh;
    padding: 130px 32px 32px;
    display: flex;
    flex-direction: column;
    color: var(--black-1);
}
.gallery-Container{
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;

    img{
        width: 100%;
        height: 100%;
        background-color: white;
        object-fit: cover;
    }

    .cover{
        width: 100%;
        height: 450px;
        background-color: white;
        margin-bottom: 4px;
    }

    .galleryList-Container{
        display: flex;
        gap: 4px;

        .galleryItem{
            width: 100%;
            background-color: white;
            height: 345px;
        }
    }
}

.DetailSection-Container{
    display: flex;
    flex-direction: column;
    .DetailTitle-container{
    padding-bottom: 24px;
       p {
        padding-bottom: 8px;
       }

       h3{
        line-height: 100%;
        font-size: 80px;
       }
    }

    .JobContextDetails{
        display: flex;
        flex-direction: column;
        gap: auto;
        align-items: end;

        .JobContextDetails-detailBox{
            display: flex;
            gap: 24px;
            width: 860px;
            max-width: 100%;
            padding-bottom: 16px;

            .detailDivisor{
                min-height: 100%;
                width: 1px;
                background-color:  var(--black-4);
            }
            .subtitle_detailSection{
                width: 100px;
                text-align: right;
                font-size: var(--text-1);
                font-weight: var(--text-weight-Bold);
            }

            .text_detailSection{
                width: 100%;
                font-size: var(--text-1);
                font-weight: var(--text-weight-Regular);
            }
        }
    }

    .strategyText{
        align-self: self-end;
        max-width: 100%;
        width: 860px;
    }
}

.separator{
    
    overflow-x: hidden;
    margin: 64px -160px;
    width: 2000px;
    height: .5px;
    background-color: var(--black-10);
}

.footerContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
    
    .readArticle--container{
    display: flex;
    width: 100%;
    justify-content: space-between;
    }

    .buttonsContainer{
        display: flex;
        gap:32px
    }
}

@media (max-width: 720px){
.gallery-Container{
    .cover{
        height: 250px;
    }

    .galleryList-Container{
        .galleryItem{
            height: 145px;
        }
    }
}

.DetailSection-Container{
    .DetailTitle-container{
        p {
            padding-right: 40px;
            padding-bottom: 8px;
        }

       h3{
        font-size: 40px;
       }
    }
}
.separator{
    margin: 64px 0px;
    width: 100%;
}
}

.footerContainer{
    .buttonsContainer{
        gap:24px;
        flex-direction: column;
        align-items: center;

        button {
            width: 100%;
            justify-content: center;
        }
    }
}

`