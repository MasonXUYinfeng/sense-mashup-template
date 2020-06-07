<template>
    <div class="chart-container chart-box-group flex flex-row flex-6">
        <div class="chart-1 flex-1 relative">
            <div class="kpi-item kpi-1">
                <span class="absolute">总量</span>
                <number-flip :value="data['总量']" font-size="1.5rem" color="#eaf8fe"/>
            </div>
        </div>
    </div>
</template>

<script>
    import numberFlip from '../../components/number-flip';

    export default {
        components: {
            numberFlip
        },
        props: {
            data: {
                type: Object,
                default() {
                    return {};
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chart-container {

        .chart-1 {
            background: url("../../assets/images/overview/timeout-alarm.gif") center no-repeat;
            background-size: 86% 100%;
            background-position: 2rem -1rem;
            z-index: -1;

            .kpi-item {
                position: absolute;
                width: 7rem;
                text-align: center;
                font-size: 1.4rem;
                height: 30%;

                span {
                    font-size: .8rem;
                    color: #a0ecff;
                }
            }

            .kpi-1 {
                top: 18%;
                left: 5.6%;

                span {
                    bottom: 0;
                    text-align: center;
                    left: 5%;
                    width: 7rem;
                }
            }

            .kpi-2 {
                top: 18%;
                right: 11.4%;

                span {
                    bottom: 0;
                    text-align: center;
                    left: 5%;
                    width: 7rem;
                }
            }

            .kpi-3 {
                top: 58%;
                left: 5.6%;

                span {
                    bottom: 0;
                    text-align: center;
                    left: 0;
                    width: 7rem;
                }
            }

            .kpi-4 {
                top: 58%;
                right: 11.4%;

                span {
                    bottom: 0;
                    text-align: center;
                    left: 5%;
                    width: 7rem;
                }
            }

            .kpi-5 {
                top: 66.5%;
                left: 39.5%;

                span {
                    bottom: 0;
                    text-align: center;
                    left: 2%;
                    width: 7rem;
                }
            }
        }

        .chart-2 {
            background: url("../../assets/images/overview/right-top-border.png") center top no-repeat;
            background-size: 96%;
            background-position: .8rem 1rem;

            .kpi-item {
                position: absolute;
                height: 8rem;
                width: 8rem;
                text-align: center;
                font-size: 1.4rem;

                span {
                    font-size: .8rem;
                    color: #a0ecff;
                }
            }

            .kpi-1 {
                top: 3.8rem;
                right: 50%;
            }

            .kpi-2 {
                top: 3.8rem;
                right: 23%;
            }

            .kpi-3 {
                top: 43%;
                right: 56.5%;
                background: url("../../assets/images/overview/trend.gif") center no-repeat;
                background-size: 110%;
                background-position: 0 3%;

                .vue-iOdometer {
                    margin-top: 48%;
                }

                span {
                    bottom: -.2rem;
                    text-align: center;
                    left: .7rem;
                    width: 7rem;
                }

            }

            .kpi-4 {
                top: 43%;
                right: 13.5%;
                background: url("../../assets/images/overview/trend.gif") center no-repeat;
                background-size: 110%;

                .vue-iOdometer {
                    margin-top: 48%;
                }

                span {
                    bottom: -.2rem;
                    text-align: center;
                    left: .7rem;
                    width: 7rem;
                }
            }
        }
    }
</style>