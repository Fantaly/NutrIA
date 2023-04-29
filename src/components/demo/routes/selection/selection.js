import React from "react";
import Title from "../../title/title";
import styles from "./selection.module.scss"
import { Button } from "react-bootstrap";
function Selection(){
    return (
        <>
            <Title title="Selection"/>
            <section className={styles.selection__container}>
                <div>
                    <h4>Choose one</h4>
                <div className={styles.cards__container}>
                <button className= {` ${styles.card__custom} card`} style={{textDecoration: + "none" }} type="button" href="/demo">
                        <img src="https://www.cucchiaio.it/content/cucchiaio/it/ricette/2020/04/pasta-alla-zozzona/jcr:content/imagePreview.img10.jpg/1588238376193.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Pasta</h5>
                        </div>
                    </button>
                    <button className= {` ${styles.card__custom} card`} style={{textDecoration: + "none" }} type="button" href="/demo">
                        <img src="https://www.cucchiaio.it/content/cucchiaio/it/ricette/2020/04/pasta-alla-zozzona/jcr:content/imagePreview.img10.jpg/1588238376193.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Lasagneh</h5>
                        </div>
                    </button>
                    <button className= {` ${styles.card__custom} card`} style={{textDecoration: + "none" }} type="button" href="/demo">
                        <img src="https://www.cucchiaio.it/content/cucchiaio/it/ricette/2020/04/pasta-alla-zozzona/jcr:content/imagePreview.img10.jpg/1588238376193.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Pizza</h5>
                        </div>
                    </button>
                </div>
                <div class="d-flex justify-content-center">
                <Button type="submit" className= {` ${styles.submit__button} `}>None of them</Button>
                </div>
                
                </div>

            </section>
        </>
    );
}

export default Selection;