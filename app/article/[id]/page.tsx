import ProfileThumb from "@/components/ProfileThumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ArticlePage() {
  return (
    <div className="container">
      <div className="mt-8 py-32">
        <div className="w-full h-[700px] bg-blue-100">
          <picture>
            <Image
              src={"https://i.ibb.co/GtwF6H1/thumbnail-02-1.jpg"}
              alt="thumbnail"
              width={2000}
              height={800}
              className="w-full h-full"
            />
          </picture>
        </div>
        <div className="flex flex-row justify-between my-9 p-3 border-y-[1px]">
          <section className="flex flex-row gap-4">
            <div>
              <ProfileThumb />
            </div>
            <div className="flex flex-col">
              <p>Harshana Wijesinghe</p>
              <div className="flex flex-row items-center gap-3 mt-1.5">
                <span className="font-light text-slate-500 text-sm">4 mints</span>
                <span className="font-light text-slate-500 text-sm">12/11/2023</span>
              </div>
            </div>
          </section>
          <section className="flex flex-row justify-center items-center space-x-2">
            <div>
              <Toggle>Upvote</Toggle>
              <Toggle>DownVote</Toggle>
              <Toggle>Comments</Toggle>
            </div>
            <div>
              <Badge>Bookmark</Badge>
            </div>
          </section>
        </div>
        <div className="flex flex-row justify-center px-12">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold pt-9 px-5">
              ‘this’ keyword of JavaScript: Concept and Usage explanation
            </h2>
            <div className="flex flex-col pt-10 px-5">
              <p className="paragraph">
                There was nothing as troublesome as <b>this</b> keyword for me
                in the early ages of coding. I always bothered so much ‘what is{" "}
                <b>this</b>?’, ‘where to use <b>this</b>? and mostly, ‘why{" "}
                <b>this</b> keyword is so common in programs?’ Have you ever had
                one of these problems or{" "}
                <b>still have no clear idea on this keyword?</b> Let’s share
                some knowledge and get a better understanding about <b>this</b>{" "}
                keyword.
              </p>
              <h5 className="font-bold text-xl">
                What is ‘this’? General Idea of this keyword
              </h5>
              <p className="paragraph">
                Although this article based on JavaScript, it’s good to grasp
                the general idea of this keyword.
              </p>
              <article className="blockquote">
                <p className="paragraph text-center italic text-slate-600">
                  In Object-Oriented Programming (OOP) <b>this</b> is a
                  reference variable that, refers to the current object or class
                  that you’re working on.
                </p>
              </article>
              <p className="paragraph">
                this is the only keyword used as a reference in JavaScript
                which, returns properties of an object.
              </p>
              <figure className="fig-section">
                <picture>
                  <Image
                    alt="example"
                    src={"https://i.ibb.co/kgVSLY6/one.png"}
                    width={880}
                    height={650}
                    className="w-auto rounded-md"
                  />
                </picture>
                <figcaption>
                  <p>Example: ‘this’ keyword in JS</p>
                </figcaption>
              </figure>
              <p className="paragraph">
                Nevertheless, the behavior of ‘this ’ complicated in some cases.
              </p>
              <figure className="fig-section">
                <picture>
                  <Image
                    alt="example"
                    src={"https://i.ibb.co/rFBn0w6/two.png"}
                    width={880}
                    height={650}
                    className="w-auto my-10 rounded-md"
                  />
                </picture>
              </figure>
              <p className="font-bold text-xl">
                Why ‘window’ object returned instead of an error?
              </p>
              <p className="paragraph">
                this keyword originally binds with the <b>‘window’</b> object
                inside the global execution context. <br /> So, <b>‘window’</b>{" "}
                is the default object.
              </p>
              <p className="paragraph mb-6 mt-0">
                When you’re using this as the reference without any object, it
                returns the default object. That’s the reason for the above
                output.
              </p>
              <h4 className="font-bold text-xl">Where to use this?</h4>
              <p className="paragraph">There are 4 ways of using this….</p>
              <ol className="list-decimal pl-5">
                <li className="">
                  <h4 className="font-bold text-lg italic">Implicit binding</h4>
                  <p className="paragraph">
                    Remember the general idea of this keyword? In terms of that
                    when you call a property inside an object using this
                    keyword, that is implicit binding.
                    <br />
                    The below example gives a better idea.
                  </p>
                  <figure className="fig-section">
                    <picture>
                      <Image
                        src={"https://i.ibb.co/XpcRW1r/three.png"}
                        alt="img"
                        width={880}
                        height={550}
                        className="w-auto my-10 rounded-md"
                      />
                    </picture>
                  </figure>
                  <p className="paragraph">
                    Let’s take an example that will trick your head
                  </p>
                  <figure className="fig-section">
                    <picture>
                      <Image
                        src={"https://i.ibb.co/3mkXjk3/four.png"}
                        alt="img"
                        width={880}
                        height={600}
                        className="w-auto mb-0 rounded-md"
                      />
                    </picture>
                    <figcaption className="pt-2.5">
                      <p className="text-xs text-slate-500">
                        JavaScript is weird sometimes…
                      </p>
                    </figcaption>
                  </figure>
                  <p className="paragraph">
                    Although the output looked complex, the explanation is
                    pretty simple.
                  </p>
                  <p className="paragraph">
                    We discussed in the beginning that this keyword was a
                    property of the global execution context. So, this only has
                    access to objects which have scoped globally.
                    <br />
                    Here this keyword was bind inside a nested function so that
                    there was no direct access to the current object thus,
                    returned the default: ‘window’ object.
                  </p>
                </li>
                <li>
                  <h4 className="subtitle">Explicit binding</h4>
                  <p className="paragraph">
                    This method is so common in most programs. Explicit binding
                    means, returning the same property for different objects. In
                    this way there be only one reference to all the objects.
                  </p>
                  <figure className="fig-section">
                    <picture>
                      <Image
                        src={"https://i.ibb.co/4Tgks7s/five.png"}
                        alt="img"
                        width={880}
                        height={600}
                        className="w-auto rounded-md"
                      />
                    </picture>
                    <figcaption className="pt-2.5">
                      <p className="fig-caption">Example of explicit binding</p>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <h4 className="subtitle">Using ‘new’ keyword</h4>
                  <p className="paragraph">Take a look at below example,</p>
                  <figure className="fig-section">
                    <picture>
                      <Image
                        src={"https://i.ibb.co/0c9264K/six.png"}
                        alt="img"
                        width={880}
                        height={600}
                        className="w-auto mb-10 rounded-md"
                      />
                    </picture>
                  </figure>
                  <p className="paragraph">
                    If you are familiar with Java, C++ or C# using the ‘new’
                    keyword is no maiden. But, in JavaScript we don’t have
                    classes so, these types of functions are called constructor
                    functions.
                  </p>
                  <p className="paragraph">
                    <i className="text-lg font-semibold">
                      But, how this keyword works here perfectly?
                    </i>
                  </p>
                  <p className="paragraph">
                    Whenever we use a ‘new’ keyword, that means we’re creating
                    an object. So, here ‘hotels’ is an object created using a
                    ‘new’ keyword.
                    <br />
                    Also, this.name & this.gps will refer to the parameters
                    which were passed in the ‘hotels’ object. Keep in mind, when
                    you create a constructor function this must add otherwise,
                    throw an error.
                  </p>
                </li>
                <li>
                  <h4 className="subtitle">Arrow Function</h4>
                  <p className="paragraph">
                    As far as you can see, though this keyword makes your code
                    simple, it is dangerous. Sometimes, this becomes complex
                    too. In ES6 arrow functions, this keyword has a ‘lexical
                    scope’ to avoid ambiguous errors and complexity.
                  </p>
                  <article className="blockquote">
                    <p className="paragraph italic text-slate-600">
                      <i>
                        This means every property that you have inside a
                        function or object can’t be manipulated from outside of
                        that function.
                      </i>
                    </p>
                  </article>
                  <p className="paragraph">
                    Therefore, when you use this inside an arrow function it has
                    no access for outside objects. Let’s take the same example
                    which tricked your head previously.
                  </p>
                  <figure className="fig-section">
                    <picture>
                      <Image
                        src={"https://i.ibb.co/b1fPRyH/seven.png"}
                        alt="img"
                        width={880}
                        height={600}
                        className="w-auto mb-0 rounded-md"
                      />
                    </picture>
                    <figcaption className="pt-2.5">
                      <p className="fig-caption">
                        No tricks <b>this</b> time…
                      </p>
                    </figcaption>
                  </figure>
                </li>
              </ol>
              <h4 className="subtitle">Why this keyword so useful</h4>
              <p className="paragraph">
                By the time you read this article you can realize that, calling
                multiple properties in different objects is possible using this
                keyword. That gives the optimization by not copy and pasting the
                same code again and again into different memory locations in the
                memory heap. Instead you have only one location in memory to
                refer to.
              </p>
              <h4 className="subtitle">Conclusion:</h4>
              <ul className="list-disc">
                <li className="my-2">
                  <p className="italic paragraph">
                    this is the only reference keyword for objects in JavaScript
                  </p>
                </li>
                <li className="my-2">
                  <p className="italic paragraph">
                    In JavaScript this has 4 different use cases. Those are
                    Implicit binding, Explicit binding, ‘new’ keyword binding
                    and arrow function usage.
                  </p>
                </li>
                <li className="my-2">
                  <p className="italic paragraph">
                    Using this keyword is memory efficient and make your code
                    clean and dry.
                  </p>
                </li>
              </ul>
              <div className="flex flex-row justify-center gap-4 my-5">
                <b className="font-semibold">*</b>
                <b className="font-semibold">*</b>
                <b className="font-semibold">*</b>
                <b className="font-semibold">*</b>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="subtitle mb-3">References:</h4>
                <Link
                  href={
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
                  }
                  className="underline italic font-semibold"
                >
                  this- JavaScript | MDN web docs
                </Link>
                <Link
                  href={
                    "https://stackoverflow.com/questions/24641544/what-are-the-benefits-and-drawbacks-of-using-the-this-keyword-in-a-constructor"
                  }
                  className="underline italic font-semibold"
                >
                  Javascript: Benefits of this keyword
                </Link>
                <Link
                  href={"https://www.javatpoint.com/this-keyword"}
                  className="underline italic font-semibold"
                >
                  this keyword | javaTpoint
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
