<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use App\Entity\Invoice;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * Encoder mot de passe
     *
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for($u = 0; $u < 5; $u++){
            $user = new User();

            $hash = $this->encoder->encodePassword($user, "password");
            $user->setFirstName($faker->firstName())
                ->setLastName($faker->lastName)
                ->setEmail($faker->email)
                ->setPassword($hash);

        $manager->persist($user);
        }

        for($c = 0; $c < 30; $c++) {
            $customer = new Customer();
            $customer->setFirstName($faker->FirstName())
                    ->setLastName($faker->lastName)
                    ->setEmail($faker->email)
                    ->setHomePhone($faker->phoneNumber)
                    ->setPhoneNumber($faker->phoneNumber)
                    ->setComment($faker->text);
                    
                    
            $manager->persist($customer);

            for($i = 0; $i < 2; $i++) {
                $invoice = new Invoice();
                $invoice->setYear($faker->randomElement(['2018', '2019']))
                        ->setJanuary(0)
                        ->setFebruary(250)
                        ->setMarch(0)
                        ->setApril(0)
                        ->setMay(10)
                        ->setJuly(0)
                        ->setAugust(0)
                        ->setSeptember(0)
                        ->setOctober(0)
                        ->setOctober(0)
                        ->setNovember(0)
                        ->setDecember(100)
                        ->setAmount($faker->numberBetween($min = 0, $max = 250))
                        ->setSubscription(35)
                        ->setMedicalCertificate($faker->boolean)
                        ->setSubscriptionType($faker->randomElement(['COMPLET', 'PARTIEL']))
                        ->setCustomer($customer)
                        ;
                $manager->persist($invoice);
            }
        }
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
